# @salestrip/eslint-config

If you'd like to add or change an eslint rule open a PR and use gh-polls to solicit team voting: https://app.gh-polls.com/.

## Installation

```bash
npm install --save-dev eslint @salestrip/eslint-config
```

## Usage

Create the following `.eslintrc` file in your project root.

```json
{
  "extends": "@salestrip",
  "root": true
}
```

## Linting

This project lints itself.

```bash
npm link
npm link @salestrip/eslint-config
npm run lint
```

## Releasing

To release a new version, use npm. Using `npm version` will update the version in `package.json` before committing the resulting file change to git and adding the appropriate git tag. Pushing a tagged version to `origin` will trigger a CI deployment to the npm registry.

To release a **bugfix** update the **patch version**.

```bash
npm version patch
git push
git push --tags
```

To release a **feature** update the **minor version**.

```bash
npm version minor
git push
git push --tags
```

To release a **breaking change** update the **major version**.

```bash
npm version major
git push
git push --tags
```
