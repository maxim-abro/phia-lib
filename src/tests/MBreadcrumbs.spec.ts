import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MBreadcrumbs from '@/components/MBreadcrumbs/index.vue';

describe('MBreadcrumbs', () => {
  it('renders correctly', () => {
    const wrapper = mount(MBreadcrumbs, {
      slots: {
        separator: '[eq'
      },
      props: {
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
    });

    expect(wrapper.text()).toContain('[eq');
  });
});
