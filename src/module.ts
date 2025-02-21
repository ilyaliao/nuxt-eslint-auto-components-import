/// <reference types="@nuxt/eslint" />

import type { Import } from 'eslint-plugin-unimport-components'
import { defineNuxtModule } from '@nuxt/kit'

export interface ModuleOptions {
  /**
   * if `false`, the import path will be `#components`
   *
   * @default true
   */
  relative?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-eslint-auto-components-import',
  },
  defaults: {
    relative: true,
  },
  setup(options, nuxt) {
    const {
      relative,
    } = options

    const imports: Import[] = []

    nuxt.hook('components:extend', (components) => {
      components.forEach((component) => {
        const isUserComponent = !component.filePath.includes('node_modules')

        if (!isUserComponent)
          return

        imports.push({
          name: component.pascalName,
          as: component.pascalName,
          from: relative ? component.filePath : '#components',
        })
      })
    })

    nuxt.hook('eslint:config:addons', (addons) => {
      addons.push({
        name: 'nuxt-eslint-auto-components-import',
        async getConfigs() {
          return {
            imports: [
              {
                from: 'eslint-plugin-unimport-components',
                name: 'createAutoComponentsInsert',
              },
            ],
            configs: [
              [
                '// nuxt-eslint-auto-components-import',
                'createAutoComponentsInsert({',
                `  imports: ${JSON.stringify(imports)}`,
                '})',
              ].join('\n'),
            ],
          }
        },
      })
    })
  },
})
