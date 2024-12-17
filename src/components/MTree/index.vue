<template>
  <!--  {{treeWithToggle}}-->
  <div
    v-for="(item, _idx) of treeWithToggle"
    :key="_idx"
  >
    <div
      class="tree-item"
      @click="onClick(item.children?.length, item.id || item.label, _idx)"
    >
      {{ item.label }}
    </div>

    <div
      v-if="item.children?.length && item.collapse"
      class="child"
    >
      <MTree
        :data="item.children"
        @node-click="emits('node-click', $event)"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MTree'
};
</script>

<script setup lang="ts">
import { ITreeEmits, ITreeProps, MTreeWithToggle } from '@/components/MTree/types';
import { onBeforeMount, ref } from 'vue';

const props = defineProps<ITreeProps>();
const emits = defineEmits<ITreeEmits>();

const treeWithToggle = ref<MTreeWithToggle[]>([]);

function onClick(toggle: boolean, value: string | number, id: number): void {
  if (!toggle) {
    handleNodeClick(value);
    return;
  }
  treeWithToggle.value[id].collapse = !treeWithToggle.value[id].collapse;
}
function handleNodeClick(value: string | number): void {
  emits('node-click', value);
}

onBeforeMount(() => {
  treeWithToggle.value = props.data.map((item) => ({
    ...item,
    collapse: false
  }));
});
</script>

<style scoped lang="scss">
@import 'src/assets/scss/colors';
.child {
  padding-left: 24px;
}
.tree-item:hover {
  cursor: pointer;
  background: rgb(var(--m-primary-light));
}
</style>
