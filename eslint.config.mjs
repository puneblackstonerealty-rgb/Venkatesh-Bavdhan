import coreWebVitals from 'eslint-config-next/core-web-vitals'
import typescript from 'eslint-config-next/typescript'

/**
 * eslint-config-next 16 ships flat configs directly — no FlatCompat / eslintrc
 * shim needed, and using one throws on load.
 */
const config = [
  ...coreWebVitals,
  ...typescript,
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'next-env.d.ts',
      /* Static assets, not source. */
      'public/**',
      /* Google Apps Script — runs in Google's V8, not Node or the browser, and
         its globals (SpreadsheetApp, MailApp) are undeclared here by design. */
      'scripts/google-apps-script/**',
    ],
  },
]

export default config
