'use strict'

module.exports = {
  'env': {
    es6: true
  },
  'extends': [
    '@salestrip/eslint-config/rules/best-practices',
    '@salestrip/eslint-config/rules/ecmascript-6',
    '@salestrip/eslint-config/rules/nodejs-commonjs',
    '@salestrip/eslint-config/rules/possible-errors',
    '@salestrip/eslint-config/rules/strict-mode',
    '@salestrip/eslint-config/rules/stylistic-issues',
    '@salestrip/eslint-config/rules/variables'
  ],
  'globals': {
    context: true,
    given: true
  },
  'parserOptions': {
    ecmaVersion: 2018
  },
  'rules': {}
}
