'use strict'

module.exports = {
  rules: {
    'init-declarations': 'off',
    'no-catch-shadow': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'off',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        vars: 'local'
      }
    ],
    'no-use-before-define': [
      'error',
      {
        classes: true,
        functions: false
      }
    ]
  }
}
