import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MTree from '../components/MTree/MTree.vue';

describe('MTree', () => {
  it('Renders correctly', () => {
    const wrapper = mount(MTree, {
      props: {
        data: [
          {
            label: 'Level one 1',
            children: [
              {
                label: 'Level two 1-1',
                children: [
                  {
                    label: 'Level three 1-1-1'
                  }
                ]
              }
            ]
          }
        ]
      }
    });
    expect(wrapper.text()).toContain('Level one 1');
  });
});
