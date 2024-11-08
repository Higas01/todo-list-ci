import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      coverage: {
        reporter: ['lcov'],
        provider: 'v8',
        exclude: [
          ...configDefaults.exclude,
          'e2e/**',
          'src/App.vue',
          'env.d.ts',
          'src/main.ts',
          'src/index.ts',
          'src/router',
          'src/**/__tests__',
        ],
      },
    },
  }),
)
