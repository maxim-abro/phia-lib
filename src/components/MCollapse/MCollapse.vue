<template>
  <div class="m-collapse">
    <div class="m-activator">
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
      <Transition
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <div v-if="isExpand">
          <slot name="expand" />
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MCollapse'
};
</script>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import type { ICollapseEmits, ICollapseProps, ICollapseSlots } from '@/components/MCollapse/types';

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

defineSlots<ICollapseSlots>();
defineExpose({
  toggleCollapse
});

const activatorProps = reactive({
  toggleCollapse,
  isExpand
});

const beforeEnter = (el: Element): void => {
  const element = el as HTMLElement;
  element.style.height = '0';
  element.style.opacity = '0';
  element.style.overflow = 'hidden';
};

const enter = (el: Element, done: () => void): void => {
  const element = el as HTMLElement;
  const height = element.scrollHeight;

  requestAnimationFrame(() => {
    element.style.transition = 'height 0.3s ease, opacity 0.3s ease';
    element.style.height = `${height}px`;
    element.style.opacity = '1';

    setTimeout(() => {
      element.style.height = 'auto';
      done();
    }, 300);
  });
};

const leave = (el: Element, done: () => void): void => {
  const element = el as HTMLElement;
  const height = element.scrollHeight;

  element.style.height = `${height}px`;
  element.style.opacity = '1';

  requestAnimationFrame(() => {
    element.style.transition = 'height 0.3s ease, opacity 0.3s ease';

    requestAnimationFrame(() => {
      element.style.height = '0';
      element.style.opacity = '0';

      setTimeout(done, 300);
    });
  });
};
</script>

<style lang="scss">
.m-collapse {
  border-top: 1px solid rgb(var(--m-border-color));
  border-bottom: 1px solid rgb(var(--m-border-color));
  padding: 10px 0;
}
.m-activator {
  margin-bottom: 8px;
  cursor: pointer;
}
</style>
