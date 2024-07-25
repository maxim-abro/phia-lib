import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MCollapse from '@/components/MCollapse/MCollapse.vue';

describe('MCollapse', () => {
  it('renders correctly', () => {
    const wrapper = mount(MCollapse, {
      slots: {
        default: 'open dropdown',
        expand: 'expanded'
      }
    });
    expect(wrapper.text()).toContain('open dropdown');
  });
});