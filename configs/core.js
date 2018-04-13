'use strict'

module.exports = {
  'env': {
    es6: true
  },
  'extends': [
    '@salestrip/eslint-config-salestrip/rules/best-practices',
    '@salestrip/eslint-config-salestrip/rules/ecmascript-6',
    '@salestrip/eslint-config-salestrip/rules/nodejs-commonjs',
    '@salestrip/eslint-config-salestrip/rules/possible-errors',
    '@salestrip/eslint-config-salestrip/rules/strict-mode',
    '@salestrip/eslint-config-salestrip/rules/stylistic-issues',
    '@salestrip/eslint-config-salestrip/rules/variables'
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
