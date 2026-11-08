// Audits the BUILT site. Run after `npm run build`:  npm run audit
//
// Reads every prerendered page in .next/server/app and fails (exit 1) on:
//   - not exactly one <h1>
//   - a title over 65 characters, or a missing / out-of-range description
//   - a canonical that is missing or not on the canonical host
//   - missing og:image or twitter:card
//   - invalid JSON-LD
//   - an <img> without alt text
//   - an <img> (src or srcset, including the url= param of /_next/image) whose
//     file is not in public/ or the build output; case-sensitive, as on Vercel
//   - a brochure that project.ts exports but whose href is outside /brochure/
//     (the only path sent X-Robots-Tag: noindex) or whose file is not in public/
//   - a sibling project's name in the visible text, meta tags, alt / aria-label /
//     title attributes or JSON-LD; a placeholder phone number; or lorem ipsum
//   - an em or en dash in visible text (house style)
//   - an internal link that points at no built page
//   - a sitemap URL that has no built page
//   - llms.txt missing or suspiciously short
//
// The five sites carry this same script. Apart from the bullet list above,
// everything that differs between them is in the CONFIG block below; keep the
// rest identical so a change can be applied to all five copies unchanged.

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

/* ───────────────────────── CONFIG: per site ───────────────────────── */
// Canonical origin exactly as the live site emits it, no trailing slash.
// Find it with:  curl -s <live url> | grep -o '<link rel="canonical"[^>]*>'
const HOST = 'https://www.venkateshsereniquebavdhan.com'

// true: this site takes its origin from NEXT_PUBLIC_SITE_URL and falls back to
// http://localhost:3000 when that is unset, so a bare local build is accepted
// with its canonicals on localhost (the audit prints a NOTE). false: the build
// must name HOST.
const LOCAL_BUILD_OK = true

// Other projects' names. Appearing in a page's visible text fails the audit
// (a sister site's copy pasted in by mistake). This site's own name is left out.
const SIBLING_NAMES = /Skydove|Codename\s+New\s+Beginnings|Vanaya|Vybe|Tropical\s+Thyme/i

// Pages that legitimately name sister projects (the developer track record).
const SIBLING_ROUTES_OK = ['/about-developer', '/updates/the-developer-track-record']

// Extra patterns that may not appear anywhere in a page's HTML: [pattern, message].
const FORBIDDEN_IN_HTML = []

// Pages that are noindex on purpose. Description, canonical, og:image and
// twitter:card are not required on these. Everything else is checked whether or
// not the build has indexing switched on, so a build with no ALLOW_INDEXING
// still has its metadata audited.
const NOINDEX_ROUTES = ['/thank-you']

// Routes where an em or en dash in visible text fails the audit (house style).
// /./ = every page, null = rule off.
const DASH_ROUTES = /./

// Built llms files that must exist, with a minimum word count each.
const LLMS_FILES = [['llms.txt.body', 1500]]
/* ──────────────────────── end of per-site CONFIG ──────────────────────── */

const LOCAL_ORIGIN = 'http://localhost:3000'
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const APP = join(ROOT, '.next', 'server', 'app')
const PUBLIC = join(ROOT, 'public')
const SEP = String.fromCharCode(92)

if (!existsSync(APP)) {
  console.error('No build found. Run `npm run build` first.')
  process.exit(1)
}

const htmlFiles = []
const bodyFiles = []
const walk = (dir) => {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f)
    if (statSync(p).isDirectory()) walk(p)
    else if (p.endsWith('.html')) htmlFiles.push(p)
    else if (p.endsWith('.body')) bodyFiles.push(p)
  }
}
walk(APP)

const toRoute = (file) => {
  const r = '/' + relative(APP, file).split(SEP).join('/').replace(/\.html$/, '')
  return r === '/index' ? '/' : r
}
const routes = new Set(htmlFiles.map(toRoute))
// Route handlers (icon, opengraph-image, robots...) build to <route>.body.
const bodyRoutes = new Set(bodyFiles.map((f) => '/' + relative(APP, f).split(SEP).join('/').replace(/\.body$/, '')))

/* Does `rel` (slash-separated, no leading slash) exist under `base`, matching
   case exactly? Windows and macOS would find a file whose case is wrong;
   Vercel's Linux filesystem would 404 it. */
const dirCache = new Map()
const listDir = (dir) => {
  if (!dirCache.has(dir)) dirCache.set(dir, existsSync(dir) ? new Set(readdirSync(dir)) : new Set())
  return dirCache.get(dir)
}
const existsExact = (base, rel) => {
  let dir = base
  for (const seg of rel.split('/').filter(Boolean)) {
    if (!listDir(dir).has(seg)) return false
    dir = join(dir, seg)
  }
  return existsSync(dir)
}

const STATIC_OK = ['/sitemap.xml', '/robots.txt', '/llms.txt', '/llms-full.txt', '/manifest.webmanifest', '/icon.svg', '/apple-icon.png', '/favicon.ico', '/opengraph-image']
const routeExists = (path) =>
  routes.has(path) ||
  bodyRoutes.has(path) ||
  STATIC_OK.includes(path) ||
  /\/opengraph-image$/.test(path) ||
  existsExact(PUBLIC, path)

const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
const visibleText = (h) =>
  h
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')

/* What a search engine or screen reader sees that visibleText() does not: meta
   tag values, alt / aria-label / title attributes and JSON-LD, entity-decoded.
   Other <script> bodies (the RSC payload) are left out on purpose: they hold
   props that are never rendered, and would give false positives. */
const hiddenText = (h) => {
  const markup = h.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ')
  const values = [
    ...[...markup.matchAll(/<meta\b[^>]*?\scontent="([^"]*)"/g)].map((m) => m[1]),
    ...[...markup.matchAll(/\s(?:alt|aria-label|title)="([^"]*)"/g)].map((m) => m[1]),
    ...[...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]),
  ]
  return decode(values.join(' | '))
}

/* Every file an <img> asks for. next/image renders
   src="/_next/image?url=%2Fgallery%2F1.webp&w=..." so the real file is the url=
   param; srcset entries are read the same way. Absolute http(s) URLs and data:
   URIs are not ours to check. Returns the problems found (empty when fine). */
const imageIssues = (tag) => {
  const found = []
  const src = (tag.match(/\ssrc="([^"]*)"/i) || [])[1]
  const srcset = (tag.match(/\ssrcset="([^"]*)"/i) || [])[1] || ''
  const candidates = [src, ...srcset.split(',').map((s) => s.trim().split(/\s+/)[0])].filter((c) => c !== undefined && c !== '')
  if (src === undefined || src === '') found.push('<img> with no src')

  const check = (raw, viaOptimiser) => {
    const u = decode(raw)
    if (/^(https?:)?\/\//i.test(u) || /^data:/i.test(u)) return
    if (!u.startsWith('/')) {
      found.push(`image src not root-relative: ${u.slice(0, 60)}`)
      return
    }
    const url = new URL(u, LOCAL_ORIGIN)
    if (url.pathname === '/_next/image') {
      const target = url.searchParams.get('url')
      if (!target || viaOptimiser) found.push(`image optimiser url has no usable url= param: ${u.slice(0, 60)}`)
      else check(target, true)
      return
    }
    let path = url.pathname
    try {
      path = decodeURIComponent(path)
    } catch {
      /* keep the raw path */
    }
    if (path.startsWith('/_next/static/')) {
      if (!existsExact(join(ROOT, '.next', 'static'), path.slice('/_next/static/'.length))) found.push(`missing image ${path}`)
    } else if (!existsExact(PUBLIC, path) && !bodyRoutes.has(path) && !/\/opengraph-image$/.test(path)) {
      found.push(`missing image ${path}`)
    }
  }
  for (const c of candidates) check(c, false)
  return found
}

/* The canonical origin this build was made for: the home page's canonical. */
const homeFile = htmlFiles.find((f) => toRoute(f) === '/')
const homeCanonical = homeFile ? (readFileSync(homeFile, 'utf8').match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || '' : ''
const onOrigin = (url, origin) => url === origin || url.startsWith(origin + '/')
const BUILD_ORIGIN = [HOST, ...(LOCAL_BUILD_OK ? [LOCAL_ORIGIN] : [])].find((o) => onOrigin(homeCanonical, o)) || HOST

let failures = 0
let imagesChecked = 0
const report = []

for (const file of htmlFiles.sort()) {
  const route = toRoute(file)
  if (/^\/_(not-found|global-error)/.test(route)) continue
  const h = readFileSync(file, 'utf8')
  const issues = []
  const meta = (name) => decode((h.match(new RegExp(`<meta (?:name|property)="${name}" content="([^"]*)"`)) || [])[1] || '')
  const title = decode((h.match(/<title>([^<]*)<\/title>/) || [])[1] || '')
  const desc = meta('description')
  const canonical = (h.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || ''
  const noindex = NOINDEX_ROUTES.includes(route)

  const h1 = (h.match(/<h1[\s>]/g) || []).length
  if (h1 !== 1) issues.push(`${h1} <h1> elements`)
  if (!title) issues.push('no <title>')
  else if (title.length > 65) issues.push(`title ${title.length} chars`)
  if (!noindex) {
    if (desc.length < 70 || desc.length > 165) issues.push(`description ${desc.length} chars`)
    if (!onOrigin(canonical, BUILD_ORIGIN)) issues.push(`canonical "${canonical}"`)
    if (!meta('og:image')) issues.push('no og:image')
    if (!meta('twitter:card')) issues.push('no twitter:card')
  }
  for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1])
    } catch {
      issues.push('invalid JSON-LD')
    }
  }
  const noAlt = (h.match(/<img(?![^>]*\balt=)[^>]*>/g) || []).length
  if (noAlt) issues.push(`${noAlt} <img> without alt`)
  for (const m of h.matchAll(/<img\b[^>]*>/g)) {
    imagesChecked++
    issues.push(...imageIssues(m[0]))
  }

  const text = visibleText(h)
  if (!SIBLING_ROUTES_OK.includes(route)) {
    if (SIBLING_NAMES.test(text)) issues.push('sibling project name in text')
    const hidden = hiddenText(h).match(SIBLING_NAMES)
    if (hidden) issues.push(`sibling project name "${hidden[0]}" in meta, alt, aria-label, title or JSON-LD`)
  }
  for (const [pattern, message] of FORBIDDEN_IN_HTML) if (pattern.test(h)) issues.push(message)
  if (/00000\s?00000|\+910000000000|lorem ipsum/i.test(h)) issues.push('placeholder content')
  if (DASH_ROUTES && DASH_ROUTES.test(route) && /[–—]/.test(text)) issues.push('em/en dash in text')

  for (const m of h.matchAll(/href="(\/[^"#?]*)/g)) {
    const path = m[1].replace(/\/$/, '') || '/'
    if (path.startsWith('/_next')) continue
    if (!routeExists(path)) issues.push(`broken link ${path}`)
  }

  if (issues.length) failures++
  report.push(`${issues.length ? 'FAIL' : ' ok '} ${route.padEnd(50)} ${[...new Set(issues)].join('; ')}`)
}

/* sitemap ↔ pages */
const sitemap = readFileSync(join(APP, 'sitemap.xml.body'), 'utf8')
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
for (const u of sitemapUrls) {
  const path = u.replace(BUILD_ORIGIN, '') || '/'
  if (!onOrigin(u, BUILD_ORIGIN) || !routes.has(path)) {
    failures++
    report.push(`FAIL sitemap lists ${u} but no page is built for it on ${BUILD_ORIGIN}`)
  }
}
const sitemapImages = (sitemap.match(/<image:loc>/g) || []).length

/* llms files */
for (const [file, minWords] of LLMS_FILES) {
  const p = join(APP, file)
  const words = existsSync(p) ? readFileSync(p, 'utf8').split(/\s+/).length : 0
  if (words < minWords) {
    failures++
    report.push(`FAIL ${file.replace('.body', '')}: ${words} words (expected at least ${minWords})`)
  } else {
    report.push(` ok  /${file.replace('.body', '')}`.padEnd(56) + `${words.toLocaleString('en-IN')} words`)
  }
}

/* brochure: if project.ts exports one (not null), its href must be under /brochure/
   (next.config.ts sends X-Robots-Tag: noindex only there, and robots.txt leaves
   the path crawlable so the header can be read) and its file must be in public/.
   Read as text, so the audit needs no TypeScript toolchain. */
const projectFile = join(ROOT, 'src', 'content', 'project.ts')
const projectSrc = existsSync(projectFile) ? readFileSync(projectFile, 'utf8') : ''
const brochureAt = projectSrc.search(/export const brochure\b/)
if (brochureAt !== -1) {
  const rest = projectSrc.slice(brochureAt)
  const next = rest.slice(1).search(/\nexport /)
  const block = next === -1 ? rest : rest.slice(0, next + 1)
  if (!/^\s*null\b/.test(block.slice(block.indexOf('=') + 1))) {
    const href = (block.match(/href:\s*['"]([^'"]+)['"]/) || [])[1]
    const file = href && href.startsWith('/') ? join(PUBLIC, ...href.split('/')) : ''
    if (!href || !href.startsWith('/')) {
      failures++
      report.push('FAIL brochure is exported from project.ts but has no root-relative href to check')
    } else if (!href.startsWith('/brochure/')) {
      failures++
      report.push(`FAIL brochure ${href} is not under /brochure/, so it would not get the X-Robots-Tag noindex header`)
    } else if (!existsExact(PUBLIC, href) || statSync(file).size === 0) {
      failures++
      report.push(`FAIL brochure ${href} is missing or empty in public/`)
    } else {
      report.push(` ok  brochure ${href}`.padEnd(56) + `${(statSync(file).size / 1024).toFixed(0)} KB`)
    }
  }
}

if (BUILD_ORIGIN !== HOST) {
  report.push(`NOTE canonicals point at ${BUILD_ORIGIN} because NEXT_PUBLIC_SITE_URL was unset for this build; the check that they name ${HOST} was not exercised. Build with NEXT_PUBLIC_SITE_URL=${HOST} to exercise it.`)
}

console.log(report.join('\n'))
console.log(`\n${htmlFiles.length} pages, ${imagesChecked} images, ${sitemapUrls.length} sitemap URLs, ${sitemapImages} sitemap images. ${failures ? `${failures} FAILED` : 'All checks passed.'}`)
process.exit(failures ? 1 : 0)
