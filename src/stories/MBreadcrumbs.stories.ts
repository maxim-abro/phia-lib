import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import MBreadcrumbs from '@/components/MBreadcrumbs/MBreadcrumbs.vue';

const meta = {
  title: 'Navigation/Breadcrumbs',
  component: MBreadcrumbs,
  tags: ['autodocs'],
  argTypes: {
    items: {
      type: 'multi-select'
    }
  },
  args: {
    items: [
      {
        title: 'Main page',
        href: '/'
      },
      {
        title: 'Categories',
        href: '/cat'
      },
      {
        title: 'auto',
        href: '/cat/auto'
      },
      {
        title: 'Volkswagen',
        href: '/cat/auto/volkswagen'
      }
    ]
  }
} satisfies Meta<typeof MBreadcrumbs>;

const Template: StoryFn<typeof MBreadcrumbs> = (args) => ({
  components: { MBreadcrumbs },
  setup() {
    return { args };
  },
  template: `
    <m-breadcrumbs v-bind="args"/>
  `
});
export default meta;
type Story = StoryObj<typeof meta>;

export const Props: Story = Template.bind({});
