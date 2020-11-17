module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb-typescript', 'plugin:prettier/recommended', '.eslintrc.ext'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'no-param-reassign': 0,

    // remove semicolon
    semi: 'off',
    '@typescript-eslint/semi': 'off',

    // prettier
    'prettier/prettier': 'error',

    // prettier conflicts
    'react/jsx-one-expression-per-line': 'off',
  },
}
