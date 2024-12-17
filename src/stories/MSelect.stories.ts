import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import MSelect from '@/components/MSelect/index.vue';
import { ref } from 'vue';

const meta = {
  title: 'Example/MSelect',
  component: MSelect,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' }
  },
  args: {
    disabled: false,
    values: [
      {
        title: 'Moscow',
        value: 'msk'
      },
      {
        title: 'Saints Petersburg',
        value: 'spb'
      }
    ]
  }
} satisfies Meta<typeof MSelect>;

const Template: StoryFn<typeof MSelect> = (args) => ({
  computed: { MSelect },
  setup() {
    const val = ref(null);
    const values = [
      {
        title: 'Moscow',
        value: 'msk'
      },
      {
        title: 'Saints Petersburg',
        value: 'spb'
      }
    ];
    return { args, val, values };
  },
  template: `
    <MSelect v-bind="args" v-model="val" :values="values"/>
  `
});
export default meta;
type Story = StoryObj<typeof meta>;

export const Props: Story = Template.bind({});
Props.args = {
  disabled: false,
  values: [
    {
      title: 'Moscow',
      value: 'msk'
    },
    {
      title: 'Saints Petersburg',
      value: 'spb'
    }
  ]
};
