import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import MPagination from '@/components/MPagination/MPagination.vue';
import { ref } from 'vue';

const meta = {
  title: 'Data/Pagination',
  component: MPagination,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'number'
    },
    pages: {
      control: 'number',
      defaultValue: 30
    },
    visibleLength: {
      control: 'number',
      defaultValue: 3
    },
    arrowsOnly: {
      control: 'boolean'
    }
  },
  args: {
    pages: 30
  }
} satisfies Meta<typeof MPagination>;

const Template: StoryFn<typeof MPagination> = (args) => ({
  components: { MPagination },
  setup() {
    const page = ref(1);
    return { page, args };
  },
  template: `
    <MPagination v-model="page" v-bind="args"/>
  `
});
export default meta;
type Story = StoryObj<typeof meta>;

export const Props: Story = Template.bind({});
