/* eslint no-magic-numbers: "off" */
'use strict'

module.exports = {
  rules: {
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': 'off',
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', 'stroustrup', {allowSingleLine: false}],
    'camelcase': ['error', {properties: 'always'}],
    'capitalized-comments': 'off',
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', {after: true, before: false}],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': ['error', 'self'],
    'eol-last': 'error',
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': 'error',
    'func-names': 'off',
    'func-style': 'off',
    'function-paren-newline': ['error', 'consistent'],
    'id-blacklist': 'off',
    'id-length': [
      'error',
      {
        exceptions: ['_', 'h', 'i', 'm', 'P', 'R'],
        max: 35,
        min: 2,
        properties: 'always'
      }
    ],
    'id-match': 'off',
    'indent': ['error', 2, {SwitchCase: 1}],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', {afterColon: true, beforeColon: false}],
    'keyword-spacing': 'error',
    'line-comment-position': 'off',
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': [
      'error',
      {
        afterBlockComment: false,
        afterLineComment: false,
        allowArrayEnd: false,
        allowArrayStart: true,
        allowBlockEnd: false,
        allowBlockStart: true,
        allowObjectEnd: false,
        allowObjectStart: true,
        beforeBlockComment: true,
        beforeLineComment: false
      }
    ],
    'lines-between-class-members': ['error', 'always'],
    'max-depth': ['error', 3],
    'max-len': ['error', {code: 80, ignoreUrls: true, tabWidth: 4}],
    'max-lines': ['error', 300],
    'max-nested-callbacks': ['error', 4],
    'max-params': ['error', 4],
    'max-statements': ['error', 30],
    'max-statements-per-line': ['error', {max: 1}],
    'multiline-comment-style': 'off',
    'multiline-ternary': 'off',
    'new-cap': ['error', {capIsNew: true, newIsCap: true}],
    'new-parens': 'error',
    'newline-per-chained-call': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': ['error', {max: 1, maxEOF: 1}],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': ['error', {allow: ['_id', '__v']}],
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': ['error', 'never'],
    'object-property-newline': ['error', {allowAllPropertiesOnSameLine: true}],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': 'off',
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': 'off',
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', 'avoid-escape'],
    'require-jsdoc': 'off',
    'semi': ['error', 'never'],
    'semi-spacing': ['error', {after: true, before: false}],
    'semi-style': ['error', 'last'],
    'sort-imports': ['error', {ignoreCase: false}],
    'sort-keys': 'off',
    'sort-vars': ['error', {ignoreCase: false}],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        asyncArrow: 'always',
        named: 'never'
      }
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error', {int32Hint: false}],
    'space-unary-ops': ['error', {nonwords: false, words: true}],
    'spaced-comment': ['error', 'always', {exceptions: ['+', '-', '=']}],
    'switch-colon-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',
    'wrap-regex': 'error'
  }
}
