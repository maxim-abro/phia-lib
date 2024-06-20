import { computed } from 'vue';
export default await (async () => {
  const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
  const value = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emits('update:modelValue', value);
    }
  });
  let __VLS_typeProps;
  const props = withDefaults(defineProps(), {
    type: 'text',
    modelValue: ''
  });
  const emits = defineEmits();
  const __VLS_withDefaultsArg = (function (t) { return t; })({
    type: 'text',
    modelValue: ''
  });
  const __VLS_fnComponent = (await import('vue')).defineComponent({
    emits: {},
  });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("m-input") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ((__VLS_ctx.type)), disabled: ((__VLS_ctx.disabled)), placeholder: ((__VLS_ctx.placeholder)), autocomplete: ((__VLS_ctx.autocomplete)), autofocus: ((__VLS_ctx.autofocus)), });
    (__VLS_ctx.value);
    // @ts-ignore
    [type, disabled, placeholder, autocomplete, autofocus, value,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
      __VLS_styleScopedClasses['m-input'];
    }
    let __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'MInput';
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
      setup() {
        return {
          value: value,
        };
      },
      props: {},
      emits: {},
      name: 'MInput',
    });
  }
  return (await import('vue')).defineComponent({
    setup() {
      return {};
    },
    props: {},
    emits: {},
    name: 'MInput',
  });
})();
//# sourceMappingURL=index.vue.js.map