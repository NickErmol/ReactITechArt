module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'no-eval': ['error', { allowIndirect: true }],
    'react/jsx-uses-vars': 'error',
    'no-console': 'error',
  },
  ignorePatterns: ['dist/*'],
};
