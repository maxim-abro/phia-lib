import type { Preview } from '@storybook/vue3'
import '@/assets/scss/colors.scss';
import '@/assets/scss/_mixins.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
