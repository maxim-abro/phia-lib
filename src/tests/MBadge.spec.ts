import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MBadge from '../components/MBadge/index.vue';

describe('MBadge', () => {
  it('renders correctly', () => {
    const wrapper = mount(MBadge, {
      slots: {
        default: 'hi dude'
      },
      props: {
        type: 'primary',
        max: 99,
        value: 100
      }
    });
    expect(wrapper.text()).toContain('hi dude');
  });
});
