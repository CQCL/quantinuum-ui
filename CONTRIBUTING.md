# Contributing to Quantinuum UI
- [Contributing to Quantinuum UI](#contributing-to-quantinuum-ui)
- [Releases](#releases)
  - [Normal releases](#normal-releases)
  - [Pre-releases](#pre-releases)


Thank you for your interest in contributing to the Quantinuum UI library!
We welcome contributions from the community to help improve and expand our design tokens and React components.

Quantinuum UI is based on [shadcn](https://ui.shadcn.com/), an opinionated tailwind theme and radix-ui component generator.
Shadcn components have been generated into this repo using the `components.json` definition and re-exported as a new library.

# Releases
We use conventional commits and semantic-release for automated releases.

## Normal releases
In order to create a normal release,
1. Your PR title must follow conventional commit format, e.g. `fix: typos in code`.
2. Merge your PR into `main`.
3. A new release will be automatically created by semantic-release.

## Pre-releases
To create a pre-release for an ongoing feature branch, follow these steps:
1. Create a new branch from `main` for your feature, e.g. `feature-x`.
2. Add to package.json the branch name under `release.branches` with `"prerelease": true`, e.g.:

   ```json
   {
     "release": {
       "branches": [
         "main",
         {
           "name": "feature-x",
           "prerelease": true
         }
       ]
     }
   }
   ```
3. Commit using conventional commit format, e.g. `feat: add new feature x`.

If you do the above correctly automatically a pre-release will be created BEFORE merging into main.
This can be found on NPM and you can test it in your projects by installing the package with the version tag, e.g. `npm install @quantinuum/quantinuum-ui@feature-x`.

For every additional commit to the same branch, a new pre-release version will be created, e.g. `feature-x.1`, `feature-x.2`, etc.
