<template>
  <div class="select">
    <div
      v-click-outside="closeMenu"
      class="select__activator"
      :class="{
        active: openMenu,
        disabled: disabled
      }"
      @click="toggleMenu"
    >
      <span class="select__activator__text">
        {{ chosenTitle }}
      </span>
      <span
        class="select__activator__icon"
        :class="{
          rotate: openMenu
        }"
      >
        <MIcon icon="mdi-chevron-down" />
      </span>
    </div>

    <div
      v-show="openMenu"
      class="select__menu"
    >
      <div
        v-for="(item, _idx) of values"
        :key="_idx"
        class="select__menu__item"
        :class="{
          active: item[valueKey] === chosenValue
        }"
        @click="chooseItem(item?.[valueKey])"
      >
        <span>
          {{ item?.[titleKey] }}
        </span>
      </div>
      <div v-if="!values?.length">
        {{ noDataText }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MSelect'
};
</script>

<script setup lang="ts">
import { IEmitsSelect, IPropsSelect } from '@/components/MSelect/types';
import { computed, ref } from 'vue';
import MIcon from '@/components/MIcon/index.vue';

const props = withDefaults(defineProps<IPropsSelect>(), {
  valueKey: 'value',
  titleKey: 'title',
  placeholder: 'Выбрать',
  noDataText: 'Нет данных'
});

const emits = defineEmits<IEmitsSelect>();
const openMenu = ref(false);

const chosenValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits('update:modelValue', value);
  }
});
const chosenTitle = computed(() => {
  if (!chosenValue.value) {
    return props.placeholder;
  }
  const foundValue = props.values?.find((item) => {
    if (item?.[props.valueKey]) {
      return item?.[props.valueKey] === chosenValue.value;
    }
  });
  return foundValue?.[props.titleKey] || chosenValue.value;
});

function toggleMenu(): void {
  if (!props?.disabled) {
    openMenu.value = !openMenu.value;
  }
}

function closeMenu(): void {
  openMenu.value = false;
}

function chooseItem(value: string | number | boolean): void {
  chosenValue.value = value;
  openMenu.value = false;
}
</script>

<style scoped lang="scss">
@import 'src/assets/scss/_mixins';
.select {
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
  &__menu {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateY(110%);
    background: rgb(var(--m-white));
    @include lightBoxShadow;
    @include borderRadius;
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
}
</style>
