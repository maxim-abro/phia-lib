import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { MIcon } from '@/components';

describe('MIcon', () => {
  it('renders correctly', () => {
    const wrapper = mount(MIcon, {
      props: {
        icon: 'mdi-account'
      }
    });

    expect(wrapper.classes()).toContain('mdi-account');
  });
});
