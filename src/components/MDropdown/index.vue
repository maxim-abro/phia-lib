<template>
  <div class="m-dropdown">
    <slot :props="activatorPropsClick" />
    <div
      v-if="isOpenDropdown"
      class="m-dropdown__menu"
      :style="`max-height: ${maxHeight || 'auto'}`"
    >
      <slot name="menu" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MDropdown'
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import type { IDropdownProps } from '@/components/MDropdown/types';

defineProps<IDropdownProps>();

const isOpenDropdown = ref(false);

function toggleMenu(): void {
  isOpenDropdown.value = !isOpenDropdown.value;
}

defineExpose({
  toggleMenu
});

const activatorPropsClick = {
  onClick: toggleMenu
};
</script>

<style scoped lang="scss">
.m-dropdown {
  position: relative;
  &__menu {
    position: absolute;
    top: 100%;
    left: 0;
  }
}
</style>
