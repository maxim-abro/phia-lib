<template>
  <div class="transfer">
    <MDataTransferPanel
      v-model:active-items="leftItems"
      :filter-placeholder="props.filterPlaceholder"
      :title-panel="leftTitle"
      :left-button-text="leftButtonText"
      :filterable="filterable"
      :item-value="itemValue"
      :item-title="itemTitle"
      :items="filteredItems"
    />
    <div class="transfer__buttons">
      <m-button
        type="primary"
        class="transfer__buttons__button"
        :disabled="!isHasRightItems"
        @click="removeItems"
      >
        <m-icon icon="mdi-chevron-left" />
        {{ leftButtonText }}
      </m-button>
      <m-button
        type="primary"
        class="transfer__buttons__button"
        :disabled="!isHasLeftItems"
        @click="addItems"
      >
        {{ rightButtonText }}
        <m-icon icon="mdi-chevron-right" />
      </m-button>
    </div>
    <MDataTransferPanel
      v-model:active-items="rightItems"
      :filter-placeholder="props.filterPlaceholder"
      :title-panel="rightTitle"
      :left-button-text="leftButtonText"
      :filterable="filterable"
      :item-value="itemValue"
      :item-title="itemTitle"
      :items="chosenItems"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'MDataTransfer'
};
</script>

<script setup lang="ts">
import MButton from '@/components/MButton/index.vue';
import type { IDataTransferEmits, IDataTransferProps } from '@/components/MDataTransfer/types';
import MDataTransferPanel from '@/components/MDataTransfer/MDataTransferPanel.vue';
import MIcon from '@/components/MIcon/index.vue';
import { computed, ref } from 'vue';

const props = withDefaults(defineProps<IDataTransferProps>(), {
  leftTitle: 'Не выбранные',
  rightTitle: 'Выбранные',
  filterPlaceholder: 'Ввести',
  itemValue: 'value',
  itemTitle: 'title'
});
const emits = defineEmits<IDataTransferEmits>();

const leftItems = ref<(string | number)[]>([]);
const rightItems = ref<(string | number)[]>([]);

const isHasLeftItems = computed(() => leftItems.value.length);
const isHasRightItems = computed(() => rightItems.value.length);

const chosenItems = computed(() =>
  props.items.filter((item) => props.modelValue.includes(item[props.itemValue]))
);
const filteredItems = computed(() => {
  return props.items.filter((item) => !props.modelValue.includes(item[props.itemValue]));
});

function addItems(): void {
  emits('update:modelValue', [...props.modelValue, ...leftItems.value]);
  leftItems.value = [];
}

function removeItems(): void {
  const filteredItems = props.modelValue.filter((item) => !rightItems.value.includes(item));
  emits('update:modelValue', filteredItems);
  rightItems.value = [];
}
</script>

<style scoped lang="scss">
.transfer {
  display: flex;
  align-items: center;
  width: max-content;
  &__buttons {
    margin: 0 36px;
    &__button {
      margin: 0 8px;
    }
  }
}
</style>
