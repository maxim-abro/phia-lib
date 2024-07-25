<template>
  <div class="m-collapse">
    <div :class="{
      'm-activator': isExpand
    }">
      <slot
        name="default"
        v-bind="activatorProps"
      />
    </div>

    <Teleport
      v-if="isMounted"
      :disabled="!toTeleport"
      :to="toTeleport"
    >
      <slot
        v-if="isExpand"
        name="expand"
      />
    </Teleport>
  </div>
</template>


<script lang="ts">
export default {
  name: 'MCollapse',
};
</script>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import type { ICollapseEmits, ICollapseProps } from '@/components/MCollapse/Type';

const props = defineProps<ICollapseProps>();
const emits = defineEmits<ICollapseEmits>();

const isExpand = ref<boolean>(false);
const isMounted = ref<boolean>(false);

onMounted(() => {
  isExpand.value = props.modelValue;
  isMounted.value = true;
});

const toggleCollapse = (): void => {
  isExpand.value = !isExpand.value;
  emits('update:modelValue', isExpand.value);
};

defineExpose({
  toggleCollapse
});

const activatorProps = reactive({
  toggleCollapse,
  isExpand
});
</script>

<style scoped lang="scss">
.m-collapse {
  border-top: 1px solid rgb(var(--m-border-color));
  border-bottom: 1px solid rgb(var(--m-border-color));
  padding: 10px 0;
}
.m-activator {
  margin-bottom: 8px;
}
</style>