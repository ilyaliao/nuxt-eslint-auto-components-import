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

## Configuration

```ts
export default defineNuxtConfig({
  modules: [
    // Both modules are required
    '@nuxt/eslint',
    'nuxt-eslint-auto-components-import'
  ],
  eslintAutoComponentsImport: {
    // Whether to use relative path imports
    // If false, will use #components alias
    // Default: true
    relative: true
  }
})
```

> [!TIP]
> It's recommended to use it with [@antfu/nuxt-eslint-auto-explicit-import](https://github.com/antfu/nuxt-eslint-auto-explicit-import) for the best auto-import experience.

## Usage

This module automatically handles component imports. When you use a component in your file, ESLint will automatically add the necessary import statements.

<video src="https://github.com/user-attachments/assets/03ad80de-1adc-4c2c-97f5-fb635d0fc235" controls />

### Example

```vue
<script setup>
// or
import { TestComponent } from '#components' // when relative: false
import { TestComponent } from './components/TestComponent.vue' // when relative: true
</script>

<!-- ESLint will automatically add the following imports -->
<template>
  <TestComponent />
</template>
```

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
