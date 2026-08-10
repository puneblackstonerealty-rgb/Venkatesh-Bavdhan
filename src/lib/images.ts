/**
 * Whether a source is a vector we ship ourselves.
 *
 * ⚠ This exists for one specific reason. Next's image optimizer refuses SVG
 * by default and answers 400 unless `dangerouslyAllowSVG` is turned on in
 * next.config. Turning that on would let ANY future SVG through the optimizer,
 * including one pasted in from outside, and an SVG is a script host.
 *
 * The safer trade is to leave the config alone and mark our own diagrams
 * `unoptimized`, which serves them straight from /public. Nothing is lost:
 * an SVG is already the smallest form of itself, and there is no raster
 * resizing for the optimizer to do.
 *
 * Every <Image> that can receive an author-supplied src needs this. Miss one
 * and the picture 400s only in production, because `next dev` is lenient.
 */
export function isVector(src: string): boolean {
  return src.toLowerCase().endsWith('.svg')
}
