import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import MInput from '../components/MInput/MInput.vue';
import { ref } from 'vue';

const meta = {
  title: 'Form/Input',
  component: MInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: {
        type: 'text'
      }
    },
    placeholder: {
      control: {
        type: 'text'
      }
    },
    maxLength: {
      control: {
        type: 'number'
      }
    },
    clearable: {
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    autocomplete: {
      control: {
        type: 'text'
      }
    }
  }
} satisfies Meta<typeof MInput>;

const Template: StoryFn<typeof MInput> = (args) => ({
  components: { MInput },
  setup() {
    const value = ref('');
    return { value, args };
  },
  template: `
    <div>
      <MInput
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
