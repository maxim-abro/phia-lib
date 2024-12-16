import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MTag from '@/components/MTag/index.vue';

describe('MTag', () => {
  it('Renders correctly', () => {
    const wrapper = mount(MTag, {
      slots: {
        default: 'Tag'
      },
      props: {
        type: 'primary'
      }
    });
    expect(wrapper.text()).toContain('Tag');
  });
});