'use strict'

// init
const MAX_NESTED_CALLBACKS = 5

module.exports = {
  env: {
    'jest': true,
    'jest/globals': true
  },
  extends: ['../rules/jest.js'],
  globals: {
    context: true,
    given: true
  },
  parserOptions: {},
  plugins: ['jest'],
  rules: {
    'arrow-body-style': 'off',
    'complexity': 'off',
    'id-length': 'off',
    'max-lines': 'off',
    'max-nested-callbacks': ['error', MAX_NESTED_CALLBACKS],
    'max-statements': 'off',
    'no-magic-numbers': 'off',
    'no-process-env': 'off',
    'no-sync': 'off',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off'
  }
}
