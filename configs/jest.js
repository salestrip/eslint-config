'use strict'

module.exports = {
  'env': {
    'jest': true,
    'jest/globals': true
  },
  'extends': [
    '../rules/jest.js'
  ],
  'globals': {
    context: true,
    given: true
  },
  'parserOptions': {},
  'plugins': [
    'jest'
  ],
  'rules': {}
}
