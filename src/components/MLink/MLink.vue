<template>
  <a
    v-if="!disabled"
    class="m-link"
    :class="[
      {
        'm-link__disabled': disabled,
        'm-link__underline': underline
      },
      type
    ]"
    :href="!disabled ? href : ''"
    :target="target"
  >
    <slot />
  </a>
  <span
    v-else
    class="m-link"
    :class="[
      {
        'm-link__disabled': disabled,
        'm-link__underline': underline
      },
      type
    ]"
  >
    <slot />
  </span>
</template>

<script lang="ts">
export default {
  name: 'MLink'
};
</script>

<script setup lang="ts">
import type { ILinkProps } from '@/components/MLink/types';
withDefaults(defineProps<ILinkProps>(), {
  target: '_self',
  type: 'default'
});
</script>

<style lang="scss">
.m-link {
  text-decoration: none;
  &__underline {
    :not(.m-link__disabled) {
      &:hover {
        text-decoration: underline;
      }
    }
  }
  &__disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  &.default {
    color: rgb(var(--m-text-color));
    &:hover {
      color: rgb(var(--m-primary));
    }
  }
  &.primary {
    color: rgb(var(--m-primary));
    &:hover {
      color: rgb(var(--m-primary-600));
    }
  }
  &.success {
    color: rgb(var(--m-success));
    &:hover {
      color: rgb(var(--m-success-600));
    }
  }
  &.info {
    color: rgb(var(--m-info));
    &:hover {
      color: rgb(var(--m-info-600));
    }
  }
  &.warning {
    color: rgb(var(--m-warning));
    &:hover {
      color: rgb(var(--m-warning-600));
    }
  }
  &.danger {
    color: rgb(var(--m-danger));
    &:hover {
      color: rgb(var(--m-danger-600));
    }
  }
}
</style>
