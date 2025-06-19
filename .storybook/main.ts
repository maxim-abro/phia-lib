import type { StorybookConfig } from '@storybook/vue3-vite'
import path from 'path';

const config: StorybookConfig = {
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'vue-docgen', // явное указание парсера
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },

  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: 'vue-component-meta',
    },
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    console.log('work');
    return {
      ...config,
      define: { 'process.env': {} },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          // Пример алиаса
          '@': path.resolve(__dirname, '../src'),
        }
      }
    }
  }
}
export default config
