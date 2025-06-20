<template>
  <div class="m-input-number">
    <button
      class="m-input-number__button-left"
      :disabled="isMin || disabled"
      @click="editValue('-')"
    >
      <MIcon icon="mdi-minus" />
    </button>

    <input
      v-model="input"
      type="text"
      :disabled="disabled"
      class="m-input-number__input"
      @blur="validateInput"
    />

    <button
      class="m-input-number__button-right"
      :disabled="isMax || disabled"
      @click="editValue('+')"
    >
      <MIcon icon="mdi-plus" />
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MInputNumber'
};
</script>

<script setup lang="ts">
import MIcon from '@/components/MIcon/index.vue';
import type { IInputNumberProps, IInputNumberEmits } from '@/components/MInputNumber/types';
import { computed } from 'vue';

const input = computed({
  get() {
    return String(props.modelValue);
  },
  set(value) {
    emits('update:modelValue', Number(value));
  }
});

const props = withDefaults(defineProps<IInputNumberProps>(), {
  steps: 1,
  disabled: false,
  modelValue: 0,
  max: 999999,
  min: -999999
});

const emits = defineEmits<IInputNumberEmits>();

function editValue(symbol: string): void {
  if (symbol === '+') {
    props.max !== parseInt(input.value, 10)
      ? updateValue(parseInt(input.value, 10) + props.steps)
      : '';
  } else if (symbol === '-') {
    props.min !== parseInt(input.value, 10)
      ? updateValue(parseInt(input.value, 10) - props.steps)
      : '';
  }
}

function updateValue(value: number): void {
  if (value || value === 0) {
    input.value = value + '';
  }
  emits('update:modelValue', value);
}

function validateInput(): void {
  input.value = input.value.replace(/[^0-9]/gi, '');
  if (parseInt(input.value, 10) >= props.max) {
    input.value = props.max + '';
  }
  if (parseInt(input.value, 10) <= props.min) {
    input.value = props.min + '';
  }
}

const isMin = computed((): boolean => {
  return parseInt(input.value, 10) === props.min;
});

const isMax = computed((): boolean => {
  return parseInt(input.value, 10) === props.max;
});
</script>

<style lang="scss">
.m-input-number {
  border: 1px solid rgb(var(--m-gray-color));
  border-radius: 4px;
  width: max-content;
  &:hover {
    border-color: rgb(var(--m-primary-400));
  }
  &__button-left {
    padding: 12px 16px;
    border-left: 1px solid rgb(var(--m-border-color));
    border-bottom: 1px solid rgb(var(--m-border-color));
    border-top: 1px solid rgb(var(--m-border-color));
    border-right: none;
    border-radius: 4px;
    &:hover {
      color: rgb(var(--m-primary-400));
    }
  }
  &__button-right {
    padding: 12px 16px;
    border-right: 1px solid rgb(var(--m-border-color));
    border-bottom: 1px solid rgb(var(--m-border-color));
    border-top: 1px solid rgb(var(--m-border-color));
    border-left: none;
    border-radius: 4px;
    &:hover {
      color: rgb(var(--m-primary-400));
    }
  }
  &__button-right,
  &__button-left {
    &:not(:disabled) {
      cursor: pointer;
      &:hover {
        background: rgb(var(--m-gray-dark-color)) !important;
      }
    }
  }
  &__input {
    border: none;
    text-align: center;
    width: 56px;
    height: 100%;
    &:disabled {
      background: #ffffff;
    }
  }
}
</style>
