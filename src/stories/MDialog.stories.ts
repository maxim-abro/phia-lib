import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import MDialog from '@/components/MDialog/MDialog.vue';
import { MCard, MButton } from '@/components';
import { ref } from 'vue';

const meta = {
  title: 'Feedback/Dialog',
  tags: ['autodocs'],
  component: MDialog,
  argTypes: {
    modelValue: {
      control: {
        type: 'boolean'
      }
    },
    width: {
      control: {
        type: 'text',
        defaultValue: '500px,'
      }
    },
    height: {
      control: {
        type: 'text',
        defaultValue: '300px,'
      }
    }
  }
} satisfies Meta<typeof MDialog>;

const Template: StoryFn<typeof MDialog> = (args) => ({
  components: { MDialog, MButton, MCard },
  setup() {
    const isDialogOpen = ref(false);
    return { isDialogOpen, args };
  },
  template: `
    <m-button
      @click="isDialogOpen = true"
    >
      open dialog
    </m-button>
    <m-dialog
      v-model="isDialogOpen"
      v-bind="args"
    >
      <m-card>
        abracadabra
      </m-card>
    </m-dialog>
  `
});
export default meta;
type Story = StoryObj<typeof meta>;

export const Props: Story = Template.bind({});
