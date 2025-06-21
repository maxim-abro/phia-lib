<template>
  <div class="m-breadcrumbs">
    <div
      v-for="(item, _idx) of items"
      :key="_idx"
      class="m-breadcrumbs__item"
    >
      <m-link
        class="m-breadcrumbs__item__link"
        :href="item.href"
        type="primary"
        :disabled="item.disabled || isLastElement(_idx)"
        underline
      >
        <slot name="prepend" />
        {{ item.title }}
      </m-link>
      <slot
        v-if="!isLastElement(_idx)"
        name="separator"
      >
        {{ separator }}
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MBreadcrumbs'
};
</script>

<script setup lang="ts">
import { IBreadcrumbsProps } from '@/components/MBreadcrumbs/types';
import MLink from '@/components/MLink/index.vue';

const props = withDefaults(defineProps<IBreadcrumbsProps>(), {
  separator: '/'
});

function isLastElement(index: number): boolean {
  return props.items.length - 1 === index;
}
</script>

<style lang="scss">
.m-breadcrumbs {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  &__item {
    &__link {
      margin-right: 4px;
    }
  }
}
</style>
