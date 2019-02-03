#!/usr/bin/env sh

#
# Run linter failing on errors only
#

lint() {
  eslint \
    --quiet \
    '{lib,test}/**/*.js'
}

#
# Run linter failing on errors and warnings
#

lint_warnings() {
  eslint \
    '{lib,test}/**/*.js'
}

#
# Run linter, fix then fail on errors
#

lint_fix() {
  eslint \
    --quiet \
    --fix \
    '{lib,test}/**/*.js'
}

#
# Handle arguments
#

if [ $# -eq 0 ]; then
  lint
else
  for arg in $*; do
    case $arg in
      -f|--fix|fix) lint_fix ;;
      -w|--warnings|warnings) lint_warnings ;;
      *) lint ;;
    esac
  done
fi
