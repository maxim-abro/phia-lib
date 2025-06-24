<template>
  <div class="m-pagination">
    <m-button
      :disabled="isFirstPage || disabled"
      @click="decrementPage"
    >
      <m-icon icon="mdi-chevron-left" />
    </m-button>

    <m-button
      :type="isActivePage(1) ? 'primary' : 'default'"
      :disabled="disabled"
      @click="choosePage(1)"
    >
      1
    </m-button>

    <m-button
      v-if="!isOneOfFirstPage"
      disabled
    >
      <m-icon icon="mdi-dots-horizontal" />
    </m-button>

    <m-button
      v-for="item of computeActivePages"
      :key="item"
      :disabled="disabled"
      :type="isActivePage(item) ? 'primary' : 'default'"
      @click="choosePage(item)"
    >
      {{ item }}
    </m-button>

    <m-button
      v-if="!isOneOfLastPage"
      disabled
    >
      <m-icon icon="mdi-dots-horizontal" />
    </m-button>

    <m-button
      v-if="pages > 1"
      :type="isActivePage(pages) ? 'primary' : 'default'"
      :disabled="disabled"
      @click="choosePage(pages)"
    >
      {{ pages }}
    </m-button>
    <m-button
      :disabled="isLastPage || disabled"
      @click="incrementPage"
    >
      <m-icon icon="mdi-chevron-right" />
    </m-button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MPagination'
};
</script>

<script setup lang="ts">
import { IPaginationEmits, IPaginationProps } from '@/components/MPagination/types';
import { computed } from 'vue';
import { MButton, MIcon } from '@/components';

const props = withDefaults(defineProps<IPaginationProps>(), {
  visibleLength: 3
});

const emits = defineEmits<IPaginationEmits>();

const currentPage = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits('update:modelValue', value);
  }
});

const isFirstPage = computed(() => currentPage.value === 1);
const isLastPage = computed(() => currentPage.value === props.pages);
const isMiddlePage = computed(
  () =>
    currentPage.value - props.visibleLength > 0 &&
    currentPage.value + props.visibleLength - 1 < props.pages
);
const isOneOfFirstPage = computed(() => currentPage.value - props.visibleLength <= 0);
const isOneOfLastPage = computed(() => currentPage.value >= props.pages - props.visibleLength + 1);

const computeActivePages = computed<number[]>(() => {
  const arrPages: number[] = [];
  if (isOneOfLastPage.value && isOneOfFirstPage.value) {
    for (let i = 2; i <= props.pages - 1; i++) {
      if (i !== 1 && i !== props.pages) {
        arrPages.push(i);
      }
    }
    return arrPages;
  }
  if (isMiddlePage.value) {
    const firstActivePage = currentPage.value - Math.floor(props.visibleLength / 2);
    const lastActivePage =
      currentPage.value + Math.floor(props.visibleLength / 2) < props.pages - 1
        ? currentPage.value + Math.ceil(props.visibleLength / 2)
        : props.pages;
    for (let i = firstActivePage; i < lastActivePage; i++) {
      if (i !== 1 && i !== props.pages) {
        arrPages.push(i);
      }
    }
  }

  if (isOneOfFirstPage.value) {
    const firstActivePage = 2;
    const lastActivePage = props.visibleLength + 2;
    for (let i = firstActivePage; i < lastActivePage; i++) {
      if (i !== 1 && i !== props.pages) {
        arrPages.push(i);
      }
    }
  }

  if (isOneOfLastPage.value) {
    const firstActivePage = props.pages - props.visibleLength;
    const lastActivePage = props.pages;
    for (let i = firstActivePage; i < lastActivePage; i++) {
      if (i !== 1 && i !== props.pages) {
        arrPages.push(i);
      }
    }
  }
  return arrPages;
});

function decrementPage(): void {
  currentPage.value -= 1;
}
function incrementPage(): void {
  currentPage.value += 1;
}
function choosePage(page: number): void {
  currentPage.value = page;
}
function isActivePage(page: number): boolean {
  return currentPage.value === page;
}
</script>

<style lang="scss">
.m-pagination {
  display: flex;
  button {
    padding: 6px 12px;
    font-size: 12px;
  }
}
</style>
