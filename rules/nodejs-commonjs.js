'use strict'

module.exports = {
  rules: {
    'callback-return': ['error', ['callback', 'cb', 'next', 'done']],
    'global-require': 'error',
    'handle-callback-err': 'error',
    'no-buffer-constructor': 'error',
    'no-mixed-requires': [
      'error',
      {
        allowCall: true,
        grouping: true
      }
    ],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-restricted-modules': 'off',
    'no-sync': 'error'
  }
}
