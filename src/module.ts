/// <reference types="@nuxt/eslint" />

import type { Import } from 'eslint-plugin-unimport-components'
import { defineNuxtModule } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-eslint-auto-components-import',
  },
  setup(_options, nuxt) {
    const imports: Import[] = []

    nuxt.hook('components:extend', (components) => {
      components.forEach((component) => {
        const isUserComponent = !component.filePath.includes('node_modules')

        if (!isUserComponent)
          return

        imports.push({
          name: component.pascalName,
          as: component.pascalName,
          from: '#components',
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
