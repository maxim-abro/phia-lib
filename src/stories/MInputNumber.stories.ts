import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import MInputNumber from '../components/MInputNumber/MInputNumber.vue';
import { ref } from 'vue';

const meta = {
  title: 'Form/Input number',
  component: MInputNumber,
  tags: ['autodocs'],
  argTypes: {
    steps: {
      control: {
        type: 'number'
      }
    },
    min: {
      control: {
        type: 'number'
      }
    },
    max: {
      control: {
        type: 'number'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    modelValue: {
      control: {
        type: 'number'
      }
    }
  }
} satisfies Meta<typeof MInputNumber>;

const Template: StoryFn<typeof MInputNumber> = (args) => ({
  components: { MInputNumber },
  setup() {
    const value = ref(0);
    return { value, args };
  },
  template: `
    <div>
      <MInputNumber
        v-model="value"
        v-bind="args"
      />
      Значение инпута: {{ value }}
    </div>
  `
});
export default meta;
type Story = StoryObj<typeof meta>;

export const Props: Story = Template.bind({});
