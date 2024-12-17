import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import MButton from '@/components/MButton/index.vue';

const meta = {
  title: 'Example/MButton',
  component: MButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger', 'info', 'default']
    },
    size: { control: 'select', options: ['large', 'default', 'small'] }
  },
  args: {
    size: 'default',
    type: 'primary'
  }
} satisfies Meta<typeof MButton>;

const Template: StoryFn<typeof MButton> = (args) => ({
  components: { MButton },
  setup() {
    return { args };
  },
  template: `
    <MButton
      v-bind="args"
    >
      Button
    </MButton>`
});

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = Template.bind({});
Primary.args = {
  size: 'default',
  type: 'primary',
  round: false
};
