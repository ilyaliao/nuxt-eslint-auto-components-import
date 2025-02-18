export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '../src/module',
  ],

  imports: {
    autoImport: false,
  },

  devtools: {
    enabled: true,
  },

  compatibilityDate: '2025-02-18',

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
