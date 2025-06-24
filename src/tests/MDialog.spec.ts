import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { ref } from 'vue';
import MDialog from '@/components/MDialog/MDialog.vue';

describe('MDialog', () => {
  const isDialogOpen = ref(true);

  it('renders correctly', async () => {
    mount(MDialog, {
      slots: {
        default: '<div>abracadabra</div>'
      },
      props: {
        modelValue: true,
        'onUpdate:modelValue': (value) => {
          isDialogOpen.value = value;
        }
      }
    });

    const dialogContent = document.body.querySelector('.m-dialog__backdrop__container');
    expect(dialogContent).toBeTruthy();
    expect(dialogContent?.textContent).toContain('abracadabra');
  });
});
