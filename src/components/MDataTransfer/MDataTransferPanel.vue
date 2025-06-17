<template>
  <div class="transfer-panel">
    <div class="transfer-panel__header">
      <div class="transfer-panel__header__left">
        <label class="transfer-panel__header__left__label">
          <input
            type="checkbox"
            :checked="isAllItemsChose"
            :disabled="itemsLength === 0"
            @click="toggleAllItems"
          >
          {{ titlePanel }}
        </label>
      </div>
      <div class="transfer-panel__header__right">
        {{ activeItemsLength }}/{{ itemsLength }}
      </div>
    </div>
    <div class="transfer-panel__input">
      <m-input
        v-model="filterValue"
        class="transfer-panel__input__element"
        clearable
        :placeholder="filterPlaceholder"
      />
    </div>
    <div class="transfer-panel__list">
      <div
        v-for="(item, _idx) of filteredItems"
        :key="_idx"
        class="transfer-panel__list__item"
      >
        <label
          class="transfer-panel__list__item__label"
        >
          <input
            v-model="chosenItems"
            :value="item[itemValue]"
            type="checkbox"
          >
          {{ item[itemTitle] }}
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MDataTransferPanel',
};
</script>

<script setup lang="ts">
import { IDataTransferPanelEmits, IDataTransferPanelProps } from '@/components/MDataTransfer/types';
import { computed, ref } from 'vue';
import MInput from '@/components/MInput/index.vue';

const props = defineProps<IDataTransferPanelProps>();
const emits = defineEmits<IDataTransferPanelEmits>();

const filterValue = ref<string>('');

const chosenItems = computed({
  get() {
    return props.activeItems;
  },
  set(value) {
    emits('update:activeItems', value || []);
  }
});

const filteredItems = computed(() => {
  if (filterValue.value) {
    return props.items.filter(item=> item[props.itemTitle].toLowerCase().includes(filterValue.value.toLowerCase()));
  }
  return props.items;
});

const itemsLength = computed(() => props.items.length);
const activeItemsLength = computed(() => props.activeItems?.length);
const isAllItemsChose = computed(() => (itemsLength.value === activeItemsLength.value) && itemsLength.value !== 0);

function toggleAllItems(): void {
  if (isAllItemsChose.value) {
    chosenItems.value = [];
    return;
  }
  chosenItems.value = props.items.map(item=>item[props.itemValue]);
}
</script>

<style scoped lang="scss">
.transfer-panel {
  width: 300px;
  border-radius: 4px;
  border: 1px solid rgb(var(--m-border-transfer));
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(var(--m-gray-color));
    height: 40px;
    padding: 0 8px;
    border-bottom: 1px solid rgb(var(--m-border-transfer));
    &__left {
      &__label {
        cursor: pointer;
      }
    }
  }
  &__input {
    padding: 15px;
    &__element {
      width: 100%;
    }
  }
  &__list {
    height: 300px;
    padding: 0 15px;
    overflow: auto;
    &__item {
      &__label {
        display: block;
        width: 100%;
        cursor: pointer;
      }
    }
  }
}
</style>