import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import MSelect from '../components/MSelect/MSelect.vue';
import { ref } from 'vue';

const meta = {
  title: 'Form/Select',
  component: MSelect,
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
  components: { MSelect },
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
    Выбранное значение: {{ val }}
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
