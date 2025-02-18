# Nuxt ESLint - Auto Components Import

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

> [!IMPORTANT]
> Experimental :)

## Setup

```bash
npm i -D nuxt-eslint-auto-components-import @nuxt/eslint
```

```ts
export default defineNuxtConfig({
  modules: [
    // Both are required
    '@nuxt/eslint',
    'nuxt-eslint-auto-components-import'
  ],
})
```

```js
// eslint.config.mjs
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  // Your ESLint config
})
```

It is recommended to use this module together with [@antfu/nuxt-eslint-auto-explicit-import](https://github.com/antfu/nuxt-eslint-auto-explicit-import) for the best auto import experience.

## Credits

- This project is heavily inspired by [nuxt-eslint-auto-explicit-import](https://github.com/antfu/nuxt-eslint-auto-explicit-import)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-eslint-auto-components-import/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-eslint-auto-components-import

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-eslint-auto-components-import.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/nuxt-eslint-auto-components-import

[license-src]: https://img.shields.io/npm/l/nuxt-eslint-auto-components-import.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-eslint-auto-components-import

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
