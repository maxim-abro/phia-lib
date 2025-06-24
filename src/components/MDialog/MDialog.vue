<template>
  <teleport to="body">
    <div
      v-if="openDialog"
      class="m-dialog"
    >
      <div
        class="m-dialog__backdrop"
        @click.self="closeDialog"
      >
        <div
          class="m-dialog__backdrop__container"
          :style="`
            width: ${generateWidthHeight(width)};
            height: ${generateWidthHeight(height)};
          `"
        >
          <slot />
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
export default {
  name: 'MDialog'
};
</script>

<script setup lang="ts">
import { IDialogEmits, IDialogProps } from '@/components/MDialog/types';
import { computed, watch } from 'vue';

const props = withDefaults(defineProps<IDialogProps>(), {
  width: '500px',
  height: '300px'
});
const emits = defineEmits<IDialogEmits>();

const openDialog = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits('update:modelValue', value);
  }
});

function closeDialog(): void {
  openDialog.value = false;
}
function generateWidthHeight(value: number | string): string {
  return typeof value === 'number' ? `${value}px` : value;
}

watch(
  () => props.modelValue,
  (value) => {
    const body = document.querySelector(`body`);
    if (value) {
      body!.style.overflow = 'hidden';
      return;
    }
    body!.style.overflow = 'visible';
  }
);
</script>

<style lang="scss">
.m-dialog {
  z-index: 99999;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  backdrop-filter: blur(4px);
  background: #00000010;

  &__backdrop {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
