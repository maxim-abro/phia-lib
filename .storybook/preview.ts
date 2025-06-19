import type { Preview } from '@storybook/vue3'
import '@/assets/scss/colors.scss';
import '@/assets/scss/_mixins.scss';

// import MInput from '@/components/MInput/index.vue';
// import { app } from '@storybook/vue3';
//
// app.component('MInput', MInput);

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
