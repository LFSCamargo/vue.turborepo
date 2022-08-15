module.exports = {
  semi: true,
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'lf',
  printWidth: 120,
  singleQuote: true,
  bracketSpacing: true,
  trailingComma: 'all',
  arrowParens: 'always',
  htmlWhitespaceSensitivity: 'ignore',

  overrides: [
    {
      files: '*.json',
      options: {
        parser: 'json',
      },
    },
  ],
};
