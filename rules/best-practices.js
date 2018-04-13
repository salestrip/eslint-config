/* eslint no-magic-numbers: "off" */
'use strict'

module.exports = {
  rules: {
    'accessor-pairs': 'off',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'complexity': ['warn', 5],
    'consistent-return': 'error',
    'curly': 'error',
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': ['error', {allowKeywords: true}],
    'eqeqeq': 'error',
    'guard-for-in': 'error',
    'no-alert': 'warn',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'off',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-labels': 'off',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': [
      'error',
      {
        enforceConst: true,
        ignore: [-1, 0, 1, 42],
        ignoreArrayIndexes: true
      }
    ],
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': ['error', {props: false}],
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': [
      'error',
      {
        message: 'Please use Object.assign instead of _.extend.',
        object: '_',
        property: 'extend'
      }
    ],
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': [
      'warn',
      {
        location: 'anywhere',
        terms: ['todo', 'fixme']
      }
    ],
    'no-with': 'error',
    'prefer-promise-reject-errors': 'error',
    'radix': 'error',
    'require-await': 'error',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'inside'],
    'yoda': 'error'
  }
}
