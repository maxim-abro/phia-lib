<template>
  <div
    class="m-cascader__menu"
    :class="{
      'left-radius': isFirstLevel,
      'right-radius': !activeChildItems?.length
    }"
  >
    <div
      v-for="(item, _idx) of items"
      :key="_idx"
      class="m-cascader__menu__item"
      :class="{
        active: _idx === activeItemIndex || choseElement === item.id
      }"
      @click="chooseItem(_idx, item.children)"
    >
      {{ item.label }}
      <MIcon
        v-if="item.children?.length"
        icon="mdi-chevron-right"
      />
    </div>
  </div>
  <MCascaderMenu
    v-if="activeItemIndex !== null"
    :items="activeChildItems"
  />
</template>

<script lang="ts">
export default {
  name: 'MCascaderMenu'
};
</script>

<script setup lang="ts">
import { ICascaderItemProps, IChooseElementInject } from '@/components/MCascader/types';
import { computed, inject, ref, watch } from 'vue';
import { IMTree } from '@/components/MTree/types';
import MIcon from '../MIcon/MIcon.vue';

const props = defineProps<ICascaderItemProps>();
const activeItemIndex = ref<number | null>(null);

const { choseElement, onChooseElement, onChooseTitle } =
  inject<IChooseElementInject>('chooseElement');

const activeChildItems = computed<IMTree[]>(() => {
  if (activeItemIndex.value === null) {
    return [];
  }
  return props.items[activeItemIndex.value].children ?? [];
});

function chooseItem(index: number, child: IMTree[] | undefined): void {
  if (child?.length) {
    activeItemIndex.value = index;
    return;
  }
  onChooseElement(props.items[index].id);
  onChooseTitle(props.items[index].label);
}

watch(
  () => props.items,
  () => {
    activeItemIndex.value = null;
  }
);
</script>

<style lang="scss">
@import 'src/assets/scss/_mixins';
.m-cascader__menu {
  overflow: auto;
  transform: translateY(110%);
  background: rgb(var(--m-white));
  @include lightBoxShadow;
  &.left-radius {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }
  &.right-radius {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
  }
  &__item {
    cursor: pointer;
    padding: 5px 16px;
    &:hover {
      background: rgb(var(--m-primary-light));
    }
    span {
      display: block;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &.active {
      color: rgb(var(--m-primary-300)) !important;
    }
  }
}
</style>
