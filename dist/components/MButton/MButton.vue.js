import { computed } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = withDefaults(defineProps(), {
  type: 'default',
  size: 'default',
});
const getClassByType = computed(() => `m-button__${props.type}`);
const __VLS_withDefaultsArg = (function (t) { return t; })({
  type: 'default',
  size: 'default',
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
let __VLS_functionalComponentProps;
const __VLS_modelEmitsType = {};
function __VLS_template() {
  let __VLS_ctx;
  /* Components */
  let __VLS_otherComponents;
  let __VLS_own;
  let __VLS_localComponents;
  let __VLS_components;
  let __VLS_styleScopedClasses;
  // CSS variable injection 
  // CSS variable injection end 
  let __VLS_resolvedLocalAndGlobalComponents;
  __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("m-button") }, type: ("button"), disabled: ((__VLS_ctx.disabled)), ...{ class: (([
    __VLS_ctx.size,
    __VLS_ctx.getClassByType,
    {
      'round': __VLS_ctx.round,
      'is-plain': __VLS_ctx.plain,
      'disabled': __VLS_ctx.disabled
    },
  ])) }, });
  __VLS_styleScopedClasses = ([
    size,
    getClassByType,
    {
      'round': round,
      'is-plain': plain,
      'disabled': disabled
    },
  ]);
  const __VLS_0 = {};
  // @ts-ignore
  [disabled, disabled, size, getClassByType, round, plain,];
  if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    __VLS_styleScopedClasses['m-button'];
  }
  let __VLS_slots;
  return __VLS_slots;
  const __VLS_componentsOption = {};
  let __VLS_name;
  let __VLS_defineComponent;
  const __VLS_internalComponent = __VLS_defineComponent({
    setup() {
      return {
        getClassByType: getClassByType,
      };
    },
    props: {},
  });
}
const __VLS_component = (await import('vue')).defineComponent({
  setup() {
    return {};
  },
  props: {},
});
export default {};
;

//# sourceMappingURL=MButton.vue.js.map