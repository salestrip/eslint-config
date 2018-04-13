'use strict'

module.exports = {
  'env': {
    es6: true
  },
  'extends': [
    'salestrip/rules/best-practices',
    'salestrip/rules/ecmascript-6',
    'salestrip/rules/nodejs-commonjs',
    'salestrip/rules/possible-errors',
    'salestrip/rules/strict-mode',
    'salestrip/rules/stylistic-issues',
    'salestrip/rules/variables'
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
