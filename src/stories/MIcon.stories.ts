import MIcon from '../components/MIcon/MIcon.vue';
import { Meta, StoryFn, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof MIcon> = {
  title: 'Basic/Icon',
  component: MIcon,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: {
        type: 'text',
        defaultValue: 'mdi-account'
      }
    }
  },
  args: {
    icon: 'mdi-account'
  }
} satisfies Meta<typeof MIcon>;

const Template: StoryFn<typeof meta> = (args) => ({
  components: { MIcon },
  setup() {
    return { args };
  },
  template: `<m-icon v-bind="args"/>`
});

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = Template.bind({});
