# @salestrip/eslint-config

[![Codefresh build status]( https://g.codefresh.io/api/badges/pipeline/salestrip/salestrip%2Feslint-config%2Fmain?branch=master&key=eyJhbGciOiJIUzI1NiJ9.NWIxOGIyMWNlMjZmNGMwMDAxZTE5MDY1.oEsGHB32WQHF0m7CSbmuJY3eUH5HAx0sxVI6TBF3gsk&type=cf-1)]( https://g.codefresh.io/pipelines/main/builds?repoOwner=salestrip&repoName=eslint-config&serviceName=salestrip%2Feslint-config&filter=trigger:build~Build;branch:master;pipeline:5b20de9941eb3c0c00c0942c~main)

If you'd like to add or change an eslint rule open a PR and use gh-polls to solicit team voting: https://app.gh-polls.com/.

## Install

Install peer dependencies along with the module.

```bash
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

This module exposes two binaries `format` and `lint`. Use them to trigger code formatting and static code analysis. Add the following npm tasks to your `package.json`.

```json
"scripts": {
  "format": "format",
  "lint": "lint"
}
```

## Lint

This project lints itself.

```bash
npm link
npm link @salestrip/eslint-config
npm run lint
```

## Release

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
