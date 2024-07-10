module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'next',
    'next/core-web-vitals',
  ],
  ignorePatterns: ['node_modules/'],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  globals: {
    io: true,
    chrome: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 10,
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
    sourceType: 'module',
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/camelcase': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)', '**/*.js?(x)'],
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-sort-props': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/camelcase': 'off',
      },
    },
  ],
}
