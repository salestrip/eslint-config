'use strict'

module.exports = {
  rules: {
    'jest/consistent-test-it': 'error',
    'jest/expect-expect': 'error',
    'jest/lowercase-name': 'error',
    'jest/no-alias-methods': 'error',
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-kooks': 'off',
    'jest/no-identical-title': 'off',
    'jest/no-jasmine-globals': 'error',
    'jest/no-jest-import': 'error',
    'jest/no-large-snapshots': ['error', {maxSize: 100}],
    'jest/no-test-callback': 'error',
    'jest/no-test-prefixes': 'error',
    'jest/no-test-return-statement': 'off',
    'jest/no-truthy-falsy': 'error',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-spy-on': 'error',
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/prefer-inline-snapshots': 'off',
    'jest/require-to-throw-message': 'error',
    'jest/valid-describe': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/valid-expect': 'error',
    'jest/prefer-todo': 'error'
  }
}
