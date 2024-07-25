import type { Meta, StoryObj } from '@storybook/vue3';
import { fn } from '@storybook/test';
import { MButton } from '@/components';

const meta = {
  title: 'Example/MButton',
  component: MButton,
  tags: ['button'],
  argTypes: {

  }
} satisfies Meta<typeof MButton>;

export default meta;
type Story = StoryObj<typeof meta>;