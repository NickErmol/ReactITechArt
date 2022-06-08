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
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        'no-eval': ['error', { allowIndirect: true }],
        'react/jsx-uses-vars': 'error',
        'no-console': 'error',
        'react/jsx-props-no-spreading': 'off',
        'no-param-reassign': ['error', { props: false }],
        'react/function-component-definition': [
          2,
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
          },
        ],
        'default-param-last': 0,
      },
    },
  ],
  ignorePatterns: ['dist/*', 'node_modules/*'],
};
