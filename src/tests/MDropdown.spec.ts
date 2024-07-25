import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { MDropdown } from '@/components'

describe('MDropdown', () => {
  it('renders correctly', () => {
    const wrapper = mount(MDropdown, {
      slots: {
        default: 'btn',
        menu: 'my menu'
      }
    });
    expect(wrapper.text()).toContain('btn');
  });
});