<template>
<div class="m-badge-wrap">
  <slot/>
  <div
    v-if="!hidden"
    class="m-badge-wrap__item"
    :class="[
      {
        'is-dot': value === undefined || isDot,
      },
      type
    ]"
  >
    <span v-if="value !== undefined && !isDot">{{ getValue }}</span>
  </div>
</div>
</template>

<script lang="ts">
export default {
  name: 'MBadge'
}
</script>

<script setup lang="ts">

import type { IBadgeProps } from '@/components/MBadge/types'
import { computed } from 'vue'

const getValue = computed(() => {
  if (props.max) {
    return Number(props.value) > props.max ? `${props.max}+` : props.value;
  } else {
    return props.value;
  }
});

const props = withDefaults(defineProps<IBadgeProps>(), {
  type: 'default',
});
</script>

<style scoped lang="scss">
.m-badge-wrap {
  position: relative;
  width: max-content;
  &__item {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 10px;
    min-height: 10px;
    border-radius: 10px;
    transform: translate(80%, -80%);
    background: rgb(var(--m-danger));
    padding: 0 6px;
    color: rgb(var(--m-white));
    border: 1px solid rgb(var(--m-white));
    font-size: 12px;
    &.is-dot {
      padding: 0;
      border-radius: 50%;
      transform: translate(50%, -50%);
    }
    &.primary {
      background: rgb(var(--m-primary));
    }
    &.success {
      background: rgb(var(--m-success));
    }
    &.info {
      background: rgb(var(--m-info));
    }
    &.warning {
      background: rgb(var(--m-warning));
    }
    &.danger {
      background: rgb(var(--m-danger));
    }
  }
}
</style>