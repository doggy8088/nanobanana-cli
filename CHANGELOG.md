# Changelog

All notable changes to this project will be documented in this file.

This file is managed by Release Please after the first release PR is merged.

## [0.2.0](https://github.com/doggy8088/nanobanana-cli/compare/nanobanana-cli-v0.1.0...nanobanana-cli-v0.2.0) (2026-03-12)


### Features

* package nanobanana cli for npm release ([7a74c20](https://github.com/doggy8088/nanobanana-cli/commit/7a74c2062ffdce3f9a233684214dc6c69a51ff66))
* 移除「2」修飾，將 Nano Banana 2 更名為 Nano Banana ([6fb39e8](https://github.com/doggy8088/nanobanana-cli/commit/6fb39e8362803b09ba792f76a7edbfacd4041c8f))


### Bug Fixes

* explicitly pass GITHUB_TOKEN to release-please-action ([0703ffa](https://github.com/doggy8088/nanobanana-cli/commit/0703ffa7725cd942c94ac071482acc6b4fbfb9de))
* explicitly pass GITHUB_TOKEN to release-please-action to fix permission issue ([e87575f](https://github.com/doggy8088/nanobanana-cli/commit/e87575f96903ad0df8a5b1802456e84d6579121e))
* prefer nanobanana env vars ([cddc926](https://github.com/doggy8088/nanobanana-cli/commit/cddc92650a266a87b28b515d10fc0b492aea8086))
* use stable bin entrypoint for npm publish ([c6c0189](https://github.com/doggy8088/nanobanana-cli/commit/c6c018955d73cdee1c662febbd59483d270a15d9))

## [0.1.0] - 2026-03-10

### Features

- Initial npm packaging for `@willh/nanobanana-cli`
- CLI binary published as `nanobanana`
- GitHub Actions CI with Node.js 22 and npm upgrade to latest
- Automated release creation with Release Please
- npm Trusted Publishing workflow with provenance
- README install, usage, and publishing documentation
