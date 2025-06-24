import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import MCascader from '@/components/MCascader/MCascader.vue';
import { ref } from 'vue';

const meta = {
  title: 'Form/Cascader',
  component: MCascader,
  tags: ['autodocs'],
  decorators: [
    () => ({
      template: `
        <div style="height: 500px;">
          <story />
        </div>
      `
    })
  ],
  argTypes: {
    modelValue: {
      control: 'text'
    },
    items: {
      control: {
        type: 'multi-select'
      }
    },
    placeholder: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    items: [
      {
        label: 'Level one 1',
        id: '1',
        children: [
          {
            label: 'Level two 1-1',
            id: '1-1',
            children: [
              {
                label: 'Level three 1-1-1',
                id: '1-1-1'
              }
            ]
          }
        ]
      },
      {
        label: 'Level one 2',
        id: '2',
        children: [
          {
            label: 'Level two 2-1',
            id: '2-1',
            children: [
              {
                label: 'Level three 2-1-1',
                id: '2-1-1'
              }
            ]
          },
          {
            label: 'Level two 2-2',
            id: '2-2',
            children: [
              {
                label: 'Level three 2-2-1',
                id: '2-2-1'
              }
            ]
          }
        ]
      },
      {
        label: 'Level one 3',
        id: '3',
        children: [
          {
            label: 'Level two 3-1',
            id: '3-1',
            children: [
              {
                label: 'Level three 3-1-1',
                id: '3-1-1'
              }
            ]
          },
          {
            label: 'Level two 3-2',
            id: '3-2',
            children: [
              {
                label: 'Level three 3-2-1',
                id: '3-2-1'
              }
            ]
          }
        ]
      }
    ]
  }
} satisfies Meta<typeof MCascader>;

const Template: StoryFn<typeof MCascader> = (args) => ({
  components: { MCascader },
  setup() {
    const activeValue = ref<number | string | null>(null);
    return { activeValue, args };
  },
  template: `
    <MCascader
      v-model="activeValue"
      v-bind="args"
    />
    
    active id: {{ activeValue }}
  `
});
export default meta;
type Story = StoryObj<typeof meta>;

export const Props: Story = Template.bind({});
