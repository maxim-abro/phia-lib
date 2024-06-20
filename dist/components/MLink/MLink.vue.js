export default await (async () => {
  const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
  let __VLS_typeProps;
  const __VLS_props = withDefaults(defineProps(), {
    target: '_self',
    type: 'default'
  });
  const __VLS_withDefaultsArg = (function (t) { return t; })({
    target: '_self',
    type: 'default'
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
    if (!__VLS_ctx.disabled) {
      __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("m-link") }, ...{ class: (([
        {
          'm-link__disabled': __VLS_ctx.disabled,
          'm-link__underline': __VLS_ctx.underline,
        },
        __VLS_ctx.type
      ])) }, href: ((!__VLS_ctx.disabled ? __VLS_ctx.href : '')), target: ((__VLS_ctx.target)), });
      __VLS_styleScopedClasses = ([
        {
          'm-link__disabled': disabled,
          'm-link__underline': underline,
        },
        type
      ]);
      const __VLS_0 = {};
      // @ts-ignore
      [disabled, disabled, disabled, underline, type, href, target,];
    }
    else {
      __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("m-link") }, ...{ class: (([
        {
          'm-link__disabled': __VLS_ctx.disabled,
          'm-link__underline': __VLS_ctx.underline,
        },
        __VLS_ctx.type
      ])) }, });
      __VLS_styleScopedClasses = ([
        {
          'm-link__disabled': disabled,
          'm-link__underline': underline,
        },
        type
      ]);
      const __VLS_1 = {};
      // @ts-ignore
      [disabled, underline, type,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
      __VLS_styleScopedClasses['m-link'];
      __VLS_styleScopedClasses['m-link'];
    }
    let __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'MLink';
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
      setup() {
        return {};
      },
      props: {},
      name: 'MLink',
    });
  }
  const __VLS_component = (await import('vue')).defineComponent({
    setup() {
      return {};
    },
    props: {},
    name: 'MLink',
  });
  return {};
})();
//# sourceMappingURL=MLink.vue.js.map