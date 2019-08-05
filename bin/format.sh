#!/usr/bin/env sh

#
# Run code formatter
#

format() {
  prettier-eslint \
    --write \
    $*
  eslint \
    --quiet \
    --fix \
    $*
}

if [ $# -eq 0 ]; then
  format '{lib,test}/**/*.js';
else
  format $*;
fi
