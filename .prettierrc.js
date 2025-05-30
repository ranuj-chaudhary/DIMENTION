// .prettierrc.js
/** @type {import('prettier').Config} */
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],

  // === General Prettier Options ===
  // These are common settings, adjust to your team's preferences.
  tabWidth: 2, // Indent with 2 spaces instead of 4
  semi: true, // Add semicolons at the end of statements
  singleQuote: true, // Use single quotes ('') instead of double quotes ("")
  printWidth: 80, // Max line length before Prettier wraps code (e.g., for long HTML class strings)
  trailingComma: 'es5', // Add trailing commas to objects and arrays where valid in ES5 (e.g., in JSON, JS objects)
  arrowParens: 'always', // Always include parentheses around a sole arrow function parameter (e.g., (x) => x)
  endOfLine: 'lf', // Enforce 'LF' (Line Feed) line endings (important for cross-OS consistency)
  // htmlWhitespaceSensitivity: 'css', // Can be 'strict', 'css', or 'ignore'. 'css' is usually good for HTML.
};
