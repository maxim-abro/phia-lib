import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import MTree from '@/components/MTree/index.vue';

const meta = {
  title: 'Data/Tree',
  component: MTree,
  tags: ['autodocs'],
  argTypes: {
    data: 'array'
  },
  args: {
    data: [
      {
        label: 'Level one 1',
        children: [
          {
            label: 'Level two 1-1',
            children: [
              {
                label: 'Level three 1-1-1'
              }
            ]
          }
        ]
      }
    ]
  }
} satisfies Meta<typeof MTree>;

const Template: StoryFn<typeof MTree> = (args) => ({
  components: { MTree },
  setup() {
    return { args };
  },
  template: `
    <MTree
      v-bind="args"
    />
  `
});

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = Template.bind({});
Primary.args = {
  data: [
    {
      label: 'Level one 1',
      children: [
        {
          label: 'Level two 1-1',
          children: [
            {
              label: 'Level three 1-1-1'
            }
          ]
        }
      ]
    }
  ]
};
