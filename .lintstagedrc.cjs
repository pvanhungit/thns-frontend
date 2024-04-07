/** @type {import("lint-staged").Config} */

module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'tsc --noEmit',

  // Prettify TS and JS files
  '**/*.(ts|tsx|js)': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    // `eslint lint --file ${filenames.join(' ')}`,
  ],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': (filenames) => `prettier --write ${filenames.join(' ')}`,

  // Lint
  '**/src': () => 'yarn lint',
};