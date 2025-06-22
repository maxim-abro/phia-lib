import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import MDataTransfer from '@/components/MDataTransfer/index.vue';
import { ref } from 'vue';

const meta = {
  title: 'Form/Data transfer',
  component: MDataTransfer,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: {
        type: 'multi-select',
        defaultValue: [
          { title: 'Moscow', value: 'moscow_0' },
          { title: 'Pyatigorsk', value: 'ptg' },
          { title: 'Kislovodsk', value: 'kvg' }
        ]
      },
      leftButtonText: {
        control: 'text'
      },
      rightButtonText: {
        control: 'text'
      },
      filterable: {
        control: 'boolean'
      },
      leftTitle: {
        control: 'text'
      },
      rightTitle: {
        control: 'text'
      },
      itemValue: {
        control: 'text'
      },
      itemTitle: {
        control: 'text'
      }
    }
  },
  args: {
    items: [
      { title: 'Moscow', value: 'moscow_0' },
      { title: 'Pyatigorsk', value: 'ptg' },
      { title: 'Kislovodsk', value: 'kvg' }
    ]
  }
} satisfies Meta<typeof MDataTransfer>;

const Template: StoryFn<typeof MDataTransfer> = (args) => ({
  components: { MDataTransfer },
  setup() {
    const vals = ref([]);
    return { args, vals };
  },
  template: `
    <MDataTransfer v-bind="args" v-model="vals"/>
    Выбранные значения: {{ vals }}
  `
});
export default meta;
type Story = StoryObj<typeof meta>;

export const Props: Story = Template.bind({});
