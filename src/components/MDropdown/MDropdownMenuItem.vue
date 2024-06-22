<template>
  <div
    class="m-dropdown-menu-item"
    :class="{
    'disabled': disabled
    }"
  >
    <slot/>
  </div>
</template>

<script lang="ts">
export default {
  name: "MDropdownMenuItem",
};
</script>

<script setup lang="ts">

import type { IDropdownMenuItemProps } from '@/components/MDropdown/types'

defineProps<IDropdownMenuItemProps>();
</script>

<style scoped lang="scss">
.m-dropdown-menu-item {
  padding: 5px 16px;
  cursor: pointer;
  &:hover:not(.disabled) {
    background: rgb(var(--m-primary-light));
    color: rgb(var(--m-primary));
  }
  &.disabled {
    color: rgb(var(--m-border-color));
    cursor: not-allowed;
  }
}
</style>