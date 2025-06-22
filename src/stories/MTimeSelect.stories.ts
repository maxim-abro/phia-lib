import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import MTimeSelect from '../components/MTimeSelect/MTimeSelect.vue';
import { ref } from 'vue';

const meta = {
  title: 'Form/Time select',
  component: MTimeSelect,
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
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    clearable: {
      control: {
        type: 'boolean'
      }
    },
    placeholder: {
      control: {
        type: 'text'
      }
    },
    start: {
      control: {
        type: 'text'
      }
    },
    end: {
      control: {
        type: 'text'
      }
    },
    step: {
      control: {
        type: 'text'
      }
    },
    modelValue: {
      control: {
        type: 'text'
      }
    }
  }
} satisfies Meta<typeof MTimeSelect>;

const Template: StoryFn<typeof MTimeSelect> = (args) => ({
  components: { MTimeSelect },
  setup() {
    const value = ref(null);
    return { value, args };
  },
  template: `
    <div>
      <MTimeSelect
        v-model="value"
        v-bind="args"
      />
      Значение селекта: {{ value }}
    </div>
  `
});
export default meta;
type Story = StoryObj<typeof meta>;

export const Props: Story = Template.bind({});
