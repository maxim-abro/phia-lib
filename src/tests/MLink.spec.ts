import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MLink from '../components/MLink/index.vue';

describe('MButton', () => {
  it('renders correctly', () => {
    const wrapper = mount(MLink, {
      slots: {
        default: 'my link'
      },
      props: {
        type: 'primary',
        href: '/'
      }
    });
    expect(wrapper.text()).toContain('my link');
  });
});
