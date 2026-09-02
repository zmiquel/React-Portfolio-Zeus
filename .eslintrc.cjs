module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Prop-types add little here; the components are internal and typed by use.
    'react/prop-types': 'off',
  },
  overrides: [
    {
      // Vendored cursor implementation - left as-is on purpose.
      files: ['src/hooks/AmazingCursor.jsx'],
      rules: { 'no-unused-vars': 'off' },
    },
  ],
}
