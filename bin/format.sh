#!/usr/bin/env sh

#
# Run code formatter
#

format() {
  prettier-eslint \
    --write \
    $*
  eslint \
    --no-eslintrc \
    --quiet \
    --fix \
    --env node,es6 \
    --parser-options ecmaVersion:2019 \
    --rule 'brace-style:[2,stroustrup],indent:[2, 2,{SwitchCase:1}]' \
    --rule 'quote-props:[2,consistent-as-needed]' \
    --rule 'quotes:[error,single,avoid-escape]' \
    $*
}

if [ $# -eq 0 ]; then
  format '{lib,test}/**/*.js';
else
  format $*;
fi
