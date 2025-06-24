<template>
  <div
    class="m-cascader"
    v-click-outside="closeMenu"
  >
    <div
      class="m-cascader__activator"
      :class="{
        active: isMenuOpen,
        disabled: disabled
      }"
      @click="toggleMenu"
    >
      <span
        class="m-select__activator__text"
        :class="{
          placeholder: !choseTitle
        }"
      >
        {{ choseTitle || placeholder }}
      </span>
      <span
        class="m-select__activator__icon"
        :class="{
          rotate: isMenuOpen
        }"
      >
        <MIcon icon="mdi-chevron-down" />
      </span>
    </div>
    <div
      v-show="isMenuOpen"
      class="m-cascader__block"
    >
      <m-cascader-menu
        :items="items"
        is-first-level
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MCascader'
};
</script>

<script setup lang="ts">
import { ICascaderEmits, ICascaderProps } from '@/components/MCascader/types';
import { computed, provide, ref } from 'vue';
import MIcon from '../MIcon/MIcon.vue';
import MCascaderMenu from '@/components/MCascader/MCascaderMenu.vue';

const props = defineProps<ICascaderProps>();
const emits = defineEmits<ICascaderEmits>();

const isMenuOpen = ref(false);
const choseTitle = ref('');

const choseElement = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits('update:modelValue', value);
  }
});

function onChooseElement(id: number | string): void {
  choseElement.value = id;
}
function onChooseTitle(title: string): void {
  choseTitle.value = title;
  isMenuOpen.value = false;
}

provide('chooseElement', { choseElement, onChooseElement, onChooseTitle });

function closeMenu(): void {
  isMenuOpen.value = false;
}
function toggleMenu(): void {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style lang="scss">
@import 'src/assets/scss/_mixins';
.m-cascader {
  position: relative;
  color: rgb(var(--m-text-color));

  &__activator {
    @include borderRadius;
    cursor: pointer;
    user-select: none;
    border: 1px solid rgb(var(--m-border-color));
    padding: 4px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    &:hover {
      border-color: rgb(var(--m-primary));
    }

    &.active {
      border-color: rgb(var(--m-primary-700));
    }

    &.disabled {
      cursor: not-allowed;
      background: rgb(var(--m-gray-color));

      &:hover {
        border-color: rgb(var(--m-border-color));
      }
    }
    span {
      &.placeholder {
        color: rgb(var(--m-text-color-second)) !important;
      }
    }
    &__text {
      text-overflow: ellipsis;
      overflow: hidden;
      flex-grow: 1;
    }

    &__icon {
      &.rotate {
        transform: rotate(180deg);
        transition: all 200ms;
      }

      transition: all 200ms;
    }
  }
  &__block {
    display: flex;
    position: absolute;
    gap: 1px;
    left: 0;
    bottom: 0;
    max-height: 150px;
  }
}
</style>
