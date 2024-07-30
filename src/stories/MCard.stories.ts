import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import MCard from '@/components/MCard/index.vue';

const meta = {
  title: 'Example/MCard',
  component: MCard,
  tags: ['autodocs'],
  argTypes: {
    header: { control: 'text' },
    footer: { control: 'text' },
  },
  args: {
    header: 'header',
    footer: 'footer'
  }
} satisfies Meta<typeof MCard>;

const Template: StoryFn<typeof MCard> = (args) => ({
  component: { MCard },
  setup() {
    return { args };
  },
  template: `
    <MCard v-bind="args">
      <template #header>Header slot</template>
      body
      <template #footer>Footer slot</template>
    </MCard>
  `
});

export default meta;
type Story = StoryObj<typeof meta>

export const Props: Story = Template.bind({});
Props.args = {
  header: 'header',
  footer: 'footer'
};