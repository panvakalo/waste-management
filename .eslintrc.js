module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-dupe-class-members': 0,
        'no-redeclare': 0,
        'no-useless-constructor': 0,
        camelcase: 'off',
        'comma-dangle': [
          'error',
          {
            arrays: 'never',
            objects: 'always',
            imports: 'never',
            exports: 'never',
            functions: 'never',
          },
        ],
        'space-before-function-paren': ['error', 'never'],
      },
    },
  ],
  rules: {
    'no-console': 'off',
  },
  ignorePatterns: ['**/vendor/**/*.js'],
}
