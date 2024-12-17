import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import MTag from '@/components/MTag/index.vue';

const meta = {
  title: 'Example/MTag',
  component: MTag,
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
} satisfies Meta<typeof MTag>;

const Template: StoryFn<typeof BTag> = (args) => ({
  components: { MTag },
  setup() {
    return { args };
  },
  template: `
    <MTag
      v-bind="args"
    >
      Tag
    </MTag>
  `
});

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = Template.bind({});
Primary.args = {
  size: 'default',
  type: 'primary',
  round: false
};
