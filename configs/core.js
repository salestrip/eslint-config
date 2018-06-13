'use strict'

module.exports = {
  'env': {
    es6: true
  },
  'extends': [
    '../rules/best-practices.js',
    '../rules/ecmascript-6.js',
    '../rules/nodejs-commonjs.js',
    '../rules/possible-errors.js',
    '../rules/strict-mode.js',
    '../rules/stylistic-issues.js',
    '../rules/variables.js'
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
