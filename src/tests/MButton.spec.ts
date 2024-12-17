import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MButton from '../components/MButton/./index.vue';

describe('MButton', () => {
  it('renders correctly', () => {
    const wrapper = mount(MButton, {
      slots: {
        default: 'my button'
      },
      props: {
        type: 'primary'
      }
    });
    expect(wrapper.text()).toContain('my button');
  });
});
