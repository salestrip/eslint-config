#!/usr/bin/env sh

prettier-eslint \
  --write \
  '{lib,test}/**/*.js'
eslint \
  --no-eslintrc \
  --quiet \
  --fix \
  --env node,es6 \
  --parser-options ecmaVersion:2019 \
  --rule 'brace-style:[2,stroustrup],indent:[2, 2,{SwitchCase:1}]' \
  '{lib,test}/**/*.js'
