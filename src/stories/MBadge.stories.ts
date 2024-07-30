import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import MBadge from '@/components/MBadge/index.vue';

const meta = {
  title: 'Example/MBadge',
  component: MBadge,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['primary', 'warning', 'danger', 'info', 'success'] },
    value: { control: 'text' }
  }
} satisfies Meta<typeof MBadge>;

const Template: StoryFn<typeof MBadge> = (args) => ({
  components: { MBadge },
  setup() {
    return { args };
  },
  template: `
    <MBadge v-bind="args">badge</MBadge>
  `
});

export default meta;
type Story = StoryObj<typeof meta>

export const Primary: Story = Template.bind({});
Primary.args = {
  type: 'primary'
};
