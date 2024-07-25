import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { MButton, MDropdown } from '@/components'

describe('MDropdown', () => {
  it('renders correctly', () => {
    const wrapper = mount(MDropdown, {
      slots: {
        default: MButton,
        menu: 'my menu'
      }
    });
    expect(wrapper.isVisible());
  });
});