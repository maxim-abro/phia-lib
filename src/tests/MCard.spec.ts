import { describe, it, expect } from 'vitest';
import { MCard } from '@/components';
import { mount } from '@vue/test-utils';

describe('MButton', () => {
  it('renders correctly', () => {
    const wrapper = mount(MCard, {
      slots: {
        default: 'default body',
        header: 'header body',
        footer: 'footer body'
      }
    });
    expect(wrapper.text()).toContain('header body');
    expect(wrapper.text()).toContain('default body');
    expect(wrapper.text()).toContain('footer body');
  });
});
