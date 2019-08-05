# @salestrip/eslint-config

[![Build Status](https://drone.stdo.io/api/badges/salestrip/eslint-config/status.svg)](https://drone.stdo.io/salestrip/eslint-config)

If you'd like to add or change an eslint rule open a PR and use gh-polls to solicit team voting: https://app.gh-polls.com/.

## Install

Install peer dependencies along with the module.

```text
npm i -D eslint
npm i -D eslint-plugin-jest
npm i -D eslint-plugin-prettier
npm i -D prettier
npm i -D prettier-eslint-cli
npm i -D @salestrip/eslint-config
```

## Use

Create the following `.eslintrc` file in your project root.

```json
{
  "extends": "@salestrip",
  "root": true
}
```

Then create a `test/.eslintrc` file with the following content.

```json
{
  "extends": "@salestrip/eslint-config/configs/jest"
}
```

This module provides a `format` binary that executes prettier code formatting followed by an eslint 'stroustrup' brace style and property quote corrections to align with eslint config. Add the following npm task to your `package.json`.

```json
"scripts": {
  "format": "format '{lib,test}/**/*.js'"
}
```

## Lint

A pre-lint script symlinks the project to itself so you can dog food the config settings while a post-lint script removes the symlinks. Note that this would remove any existing global symlink so you would need to run `npm link` again to restore it.

```text
npm run lint
```

## Release

To release a new version, use npm. Using `npm version` will update the version in `package.json` before committing the resulting file change to git and adding the appropriate git tag. Pushing a tagged version to `origin` will publish to the npm registry.

To release a **bugfix** update the **patch version**.

```text
npm version patch
git push
git push --tags
```

To release a **feature** update the **minor version**.

```text
npm version minor
git push
git push --tags
```

To release a **breaking change** update the **major version**.

```text
npm version major
git push
git push --tags
```
