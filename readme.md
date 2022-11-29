# Lexica <!-- omit in toc -->

> API wrapper around [Lexica](https://lexica.art) for searching Stable Diffusion images.

[![NPM](https://img.shields.io/npm/v/lexica-api.svg)](https://www.npmjs.com/package/lexica-api) [![Build Status](https://github.com/transitive-bullshit/lexica-api/actions/workflows/test.yml/badge.svg)](https://github.com/transitive-bullshit/lexica-api/actions/workflows/test.yml) [![MIT License](https://img.shields.io/badge/license-MIT-blue)](https://github.com/transitive-bullshit/lexica-api/blob/main/license) [![Prettier Code Formatting](https://img.shields.io/badge/code_style-prettier-brightgreen.svg)](https://prettier.io)

- [Intro](#intro)
- [Install](#install)
- [Usage](#usage)
- [License](#license)

## Intro

This package is a simple Node.js API wrapper around the [Lexica](https://lexica.art/docs) API for searching Stable Diffusion images.

It uses `got` and TypeScript.

## Install

```bash
npm install --save lexica-api
# or
yarn add lexica-api
# or
pnpm add lexica-api
```

## Usage

```ts
import { LexicaAPI } from 'lexica-api'

const lexica = new LexicaAPI()

// normal search
const results0 = await lexica.search('apples')

// reverse image search
const results1 = await lexica.reverseImageSearch(
  'https://media.gettyimages.com/photos/crete-senesi-countryside-in-summer-tuscany-italy-picture-id1411845730'
)
```

## License

MIT © [Travis Fischer](https://transitivebullsh.it)

Support my open source work by <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
