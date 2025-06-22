import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import MLink from '../components/MLink/MLink.vue';

const meta = {
  title: 'Basic/Link',
  component: MLink,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger', 'info', 'default']
    },
    target: {
      control: 'select',
      options: ['_blank', '_parent', '_self', '_top']
    }
  }
} satisfies Meta<typeof MLink>;

const Template: StoryFn<typeof MLink> = (args) => ({
  components: { MLink },
  setup() {
    return { args };
  },
  template: `
    <MLink v-bind="args">link</MLink>
  `
});

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = Template.bind({
  type: 'primary',
  href: 'https://ya.ru/'
});
