import { MButton, MLink, MInput } from '@/components';
import useNotify from '@/components/MNotify/useNotify';
import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const propsNotify = {
  title: 'title',
  message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, harum?',
};
const testVal = ref('');
const notify = useNotify();
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
  __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
  // @ts-ignore
  const __VLS_0 = {}
    .MButton;
  ({}.MButton);
  ({}.MButton);
  __VLS_components.MButton;
  __VLS_components.mButton;
  __VLS_components.MButton;
  __VLS_components.mButton;
  // @ts-ignore
  [MButton, MButton,];
  // @ts-ignore
  const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ style: ({}) }, }));
  const __VLS_2 = __VLS_1({ ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
  ({}({ ...{ style: ({}) }, }));
  (__VLS_5.slots).default;
  const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
  // @ts-ignore
  const __VLS_6 = {}
    .MButton;
  ({}.MButton);
  ({}.MButton);
  __VLS_components.MButton;
  __VLS_components.mButton;
  __VLS_components.MButton;
  __VLS_components.mButton;
  // @ts-ignore
  [MButton, MButton,];
  // @ts-ignore
  const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ type: ("primary"), ...{ style: ({}) }, }));
  const __VLS_8 = __VLS_7({ type: ("primary"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
  ({}({ type: ("primary"), ...{ style: ({}) }, }));
  (__VLS_11.slots).default;
  const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
  // @ts-ignore
  const __VLS_12 = {}
    .MButton;
  ({}.MButton);
  ({}.MButton);
  __VLS_components.MButton;
  __VLS_components.mButton;
  __VLS_components.MButton;
  __VLS_components.mButton;
  // @ts-ignore
  [MButton, MButton,];
  // @ts-ignore
  const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ type: ("success"), ...{ style: ({}) }, }));
  const __VLS_14 = __VLS_13({ type: ("success"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
  ({}({ type: ("success"), ...{ style: ({}) }, }));
  (__VLS_17.slots).default;
  const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
  // @ts-ignore
  const __VLS_18 = {}
    .MButton;
  ({}.MButton);
  ({}.MButton);
  __VLS_components.MButton;
  __VLS_components.mButton;
  __VLS_components.MButton;
  __VLS_components.mButton;
  // @ts-ignore
  [MButton, MButton,];
  // @ts-ignore
  const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ type: ("info"), ...{ style: ({}) }, }));
  const __VLS_20 = __VLS_19({ type: ("info"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
  ({}({ type: ("info"), ...{ style: ({}) }, }));
  (__VLS_23.slots).default;
  const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
  // @ts-ignore
  const __VLS_24 = {}
    .MButton;
  ({}.MButton);
  ({}.MButton);
  __VLS_components.MButton;
  __VLS_components.mButton;
  __VLS_components.MButton;
  __VLS_components.mButton;
  // @ts-ignore
  [MButton, MButton,];
  // @ts-ignore
  const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ type: ("warning"), ...{ style: ({}) }, }));
  const __VLS_26 = __VLS_25({ type: ("warning"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
  ({}({ type: ("warning"), ...{ style: ({}) }, }));
  (__VLS_29.slots).default;
  const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
  // @ts-ignore
  const __VLS_30 = {}
    .MButton;
  ({}.MButton);
  ({}.MButton);
  __VLS_components.MButton;
  __VLS_components.mButton;
  __VLS_components.MButton;
  __VLS_components.mButton;
  // @ts-ignore
  [MButton, MButton,];
  // @ts-ignore
  const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ type: ("danger"), ...{ style: ({}) }, }));
  const __VLS_32 = __VLS_31({ type: ("danger"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
  ({}({ type: ("danger"), ...{ style: ({}) }, }));
  (__VLS_35.slots).default;
  const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
  __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
  // @ts-ignore
  const __VLS_36 = {}
    .MButton;
  ({}.MButton);
  ({}.MButton);
  __VLS_components.MButton;
  __VLS_components.mButton;
  __VLS_components.MButton;
  __VLS_components.mButton;
  // @ts-ignore
  [MButton, MButton,];
  // @ts-ignore
  const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ plain: (true), ...{ style: ({}) }, }));
  const __VLS_38 = __VLS_37({ plain: (true), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
  ({}({ plain: (true), ...{ style: ({}) }, }));
  (__VLS_41.slots).default;
  const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
  // @ts-ignore
  const __VLS_42 = {}
    .MButton;
  ({}.MButton);
  ({}.MButton);
  __VLS_components.MButton;
  __VLS_components.mButton;
  __VLS_components.MButton;
  __VLS_components.mButton;
  // @ts-ignore
  [MButton, MButton,];
  // @ts-ignore
  const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ plain: (true), type: ("primary"), ...{ style: ({}) }, }));
  const __VLS_44 = __VLS_43({ plain: (true), type: ("primary"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_43));
  ({}({ plain: (true), type: ("primary"), ...{ style: ({}) }, }));
  (__VLS_47.slots).default;
  const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
  // @ts-ignore
  const __VLS_48 = {}
    .MButton;
  ({}.MButton);
  ({}.MButton);
  __VLS_components.MButton;
  __VLS_components.mButton;
  __VLS_components.MButton;
  __VLS_components.mButton;
  // @ts-ignore
  [MButton, MButton,];
  // @ts-ignore
  const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ plain: (true), type: ("success"), ...{ style: ({}) }, }));
  const __VLS_50 = __VLS_49({ plain: (true), type: ("success"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_49));
  ({}({ plain: (true), type: ("success"), ...{ style: ({}) }, }));
  (__VLS_53.slots).default;
  const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
  // @ts-ignore
  const __VLS_54 = {}
    .MButton;
  ({}.MButton);
  ({}.MButton);
  __VLS_components.MButton;
  __VLS_components.mButton;
  __VLS_components.MButton;
  __VLS_components.mButton;
  // @ts-ignore
  [MButton, MButton,];
  // @ts-ignore
  const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ plain: (true), type: ("info"), ...{ style: ({}) }, }));
  const __VLS_56 = __VLS_55({ plain: (true), type: ("info"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_55));
  ({}({ plain: (true), type: ("info"), ...{ style: ({}) }, }));
  (__VLS_59.slots).default;
  const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
  // @ts-ignore
  const __VLS_60 = {}
    .MButton;
  ({}.MButton);
  ({}.MButton);
  __VLS_components.MButton;
  __VLS_components.mButton;
  __VLS_components.MButton;
  __VLS_components.mButton;
  // @ts-ignore
  [MButton, MButton,];
  // @ts-ignore
  const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ plain: (true), type: ("warning"), ...{ style: ({}) }, }));
  const __VLS_62 = __VLS_61({ plain: (true), type: ("warning"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_61));
  ({}({ plain: (true), type: ("warning"), ...{ style: ({}) }, }));
  (__VLS_65.slots).default;
  const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
  // @ts-ignore
  const __VLS_66 = {}
    .MButton;
  ({}.MButton);
  ({}.MButton);
  __VLS_components.MButton;
  __VLS_components.mButton;
  __VLS_components.MButton;
  __VLS_components.mButton;
  // @ts-ignore
  [MButton, MButton,];
  // @ts-ignore
  const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ plain: (true), type: ("danger"), ...{ style: ({}) }, }));
  const __VLS_68 = __VLS_67({ plain: (true), type: ("danger"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_67));
  ({}({ plain: (true), type: ("danger"), ...{ style: ({}) }, }));
  (__VLS_71.slots).default;
  const __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
  __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
  // @ts-ignore
  const __VLS_72 = {}
    .MButton;
  ({}.MButton);
  ({}.MButton);
  __VLS_components.MButton;
  __VLS_components.mButton;
  __VLS_components.MButton;
  __VLS_components.mButton;
  // @ts-ignore
  [MButton, MButton,];
  // @ts-ignore
  const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ round: (true), ...{ style: ({}) }, }));
  const __VLS_74 = __VLS_73({ round: (true), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_73));
  ({}({ round: (true), ...{ style: ({}) }, }));
  (__VLS_77.slots).default;
  const __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74);
  // @ts-ignore
  const __VLS_78 = {}
    .MButton;
  ({}.MButton);
  ({}.MButton);
  __VLS_components.MButton;
  __VLS_components.mButton;
  __VLS_components.MButton;
  __VLS_components.mButton;
  // @ts-ignore
  [MButton, MButton,];
  // @ts-ignore
  const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ round: (true), type: ("primary"), ...{ style: ({}) }, }));
  const __VLS_80 = __VLS_79({ round: (true), type: ("primary"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_79));
  ({}({ round: (true), type: ("primary"), ...{ style: ({}) }, }));
  (__VLS_83.slots).default;
  const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_78, __VLS_80);
  // @ts-ignore
  const __VLS_84 = {}
    .MButton;
  ({}.MButton);
  ({}.MButton);
  __VLS_components.MButton;
  __VLS_components.mButton;
  __VLS_components.MButton;
  __VLS_components.mButton;
  // @ts-ignore
  [MButton, MButton,];
  // @ts-ignore
  const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ round: (true), type: ("success"), ...{ style: ({}) }, }));
  const __VLS_86 = __VLS_85({ round: (true), type: ("success"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_85));
  ({}({ round: (true), type: ("success"), ...{ style: ({}) }, }));
  (__VLS_89.slots).default;
  const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86);
  // @ts-ignore
  const __VLS_90 = {}
    .MButton;
  ({}.MButton);
  ({}.MButton);
  __VLS_components.MButton;
  __VLS_components.mButton;
  __VLS_components.MButton;
  __VLS_components.mButton;
  // @ts-ignore
  [MButton, MButton,];
  // @ts-ignore
  const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ round: (true), type: ("info"), ...{ style: ({}) }, }));
  const __VLS_92 = __VLS_91({ round: (true), type: ("info"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_91));
  ({}({ round: (true), type: ("info"), ...{ style: ({}) }, }));
  (__VLS_95.slots).default;
  const __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92);
  // @ts-ignore
  const __VLS_96 = {}
    .MButton;
  ({}.MButton);
  ({}.MButton);
  __VLS_components.MButton;
  __VLS_components.mButton;
  __VLS_components.MButton;
  __VLS_components.mButton;
  // @ts-ignore
  [MButton, MButton,];
  // @ts-ignore
  const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({ round: (true), type: ("warning"), ...{ style: ({}) }, }));
  const __VLS_98 = __VLS_97({ round: (true), type: ("warning"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_97));
  ({}({ round: (true), type: ("warning"), ...{ style: ({}) }, }));
  (__VLS_101.slots).default;
  const __VLS_101 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98);
  // @ts-ignore
  const __VLS_102 = {}
    .MButton;
  ({}.MButton);
  ({}.MButton);
  __VLS_components.MButton;
  __VLS_components.mButton;
  __VLS_components.MButton;
  __VLS_components.mButton;
  // @ts-ignore
  [MButton, MButton,];
  // @ts-ignore
  const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({ round: (true), type: ("danger"), ...{ style: ({}) }, }));
  const __VLS_104 = __VLS_103({ round: (true), type: ("danger"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_103));
  ({}({ round: (true), type: ("danger"), ...{ style: ({}) }, }));
  (__VLS_107.slots).default;
  const __VLS_107 = __VLS_pickFunctionalComponentCtx(__VLS_102, __VLS_104);
  __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
  // @ts-ignore
  const __VLS_108 = {}
    .MButton;
  ({}.MButton);
  ({}.MButton);
  __VLS_components.MButton;
  __VLS_components.mButton;
  __VLS_components.MButton;
  __VLS_components.mButton;
  // @ts-ignore
  [MButton, MButton,];
  // @ts-ignore
  const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({ disabled: (true), ...{ style: ({}) }, }));
  const __VLS_110 = __VLS_109({ disabled: (true), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_109));
  ({}({ disabled: (true), ...{ style: ({}) }, }));
  (__VLS_113.slots).default;
  const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_108, __VLS_110);
  // @ts-ignore
  const __VLS_114 = {}
    .MButton;
  ({}.MButton);
  ({}.MButton);
  __VLS_components.MButton;
  __VLS_components.mButton;
  __VLS_components.MButton;
  __VLS_components.mButton;
  // @ts-ignore
  [MButton, MButton,];
  // @ts-ignore
  const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({ disabled: (true), type: ("primary"), ...{ style: ({}) }, }));
  const __VLS_116 = __VLS_115({ disabled: (true), type: ("primary"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_115));
  ({}({ disabled: (true), type: ("primary"), ...{ style: ({}) }, }));
  (__VLS_119.slots).default;
  const __VLS_119 = __VLS_pickFunctionalComponentCtx(__VLS_114, __VLS_116);
  // @ts-ignore
  const __VLS_120 = {}
    .MButton;
  ({}.MButton);
  ({}.MButton);
  __VLS_components.MButton;
  __VLS_components.mButton;
  __VLS_components.MButton;
  __VLS_components.mButton;
  // @ts-ignore
  [MButton, MButton,];
  // @ts-ignore
  const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({ disabled: (true), type: ("success"), ...{ style: ({}) }, }));
  const __VLS_122 = __VLS_121({ disabled: (true), type: ("success"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_121));
  ({}({ disabled: (true), type: ("success"), ...{ style: ({}) }, }));
  (__VLS_125.slots).default;
  const __VLS_125 = __VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122);
  // @ts-ignore
  const __VLS_126 = {}
    .MButton;
  ({}.MButton);
  ({}.MButton);
  __VLS_components.MButton;
  __VLS_components.mButton;
  __VLS_components.MButton;
  __VLS_components.mButton;
  // @ts-ignore
  [MButton, MButton,];
  // @ts-ignore
  const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({ disabled: (true), type: ("info"), ...{ style: ({}) }, }));
  const __VLS_128 = __VLS_127({ disabled: (true), type: ("info"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_127));
  ({}({ disabled: (true), type: ("info"), ...{ style: ({}) }, }));
  (__VLS_131.slots).default;
  const __VLS_131 = __VLS_pickFunctionalComponentCtx(__VLS_126, __VLS_128);
  // @ts-ignore
  const __VLS_132 = {}
    .MButton;
  ({}.MButton);
  ({}.MButton);
  __VLS_components.MButton;
  __VLS_components.mButton;
  __VLS_components.MButton;
  __VLS_components.mButton;
  // @ts-ignore
  [MButton, MButton,];
  // @ts-ignore
  const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({ disabled: (true), type: ("warning"), ...{ style: ({}) }, }));
  const __VLS_134 = __VLS_133({ disabled: (true), type: ("warning"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_133));
  ({}({ disabled: (true), type: ("warning"), ...{ style: ({}) }, }));
  (__VLS_137.slots).default;
  const __VLS_137 = __VLS_pickFunctionalComponentCtx(__VLS_132, __VLS_134);
  // @ts-ignore
  const __VLS_138 = {}
    .MButton;
  ({}.MButton);
  ({}.MButton);
  __VLS_components.MButton;
  __VLS_components.mButton;
  __VLS_components.MButton;
  __VLS_components.mButton;
  // @ts-ignore
  [MButton, MButton,];
  // @ts-ignore
  const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({ disabled: (true), type: ("danger"), ...{ style: ({}) }, }));
  const __VLS_140 = __VLS_139({ disabled: (true), type: ("danger"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_139));
  ({}({ disabled: (true), type: ("danger"), ...{ style: ({}) }, }));
  (__VLS_143.slots).default;
  const __VLS_143 = __VLS_pickFunctionalComponentCtx(__VLS_138, __VLS_140);
  __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
  // @ts-ignore
  const __VLS_144 = {}
    .MButton;
  ({}.MButton);
  ({}.MButton);
  __VLS_components.MButton;
  __VLS_components.mButton;
  __VLS_components.MButton;
  __VLS_components.mButton;
  // @ts-ignore
  [MButton, MButton,];
  // @ts-ignore
  const __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144({ ...{ 'onClick': {} }, }));
  const __VLS_146 = __VLS_145({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_145));
  ({}({ ...{ 'onClick': {} }, }));
  let __VLS_150;
  const __VLS_151 = {
    onClick: (...[$event]) => {
      __VLS_ctx.notify.openNotify(__VLS_ctx.propsNotify);
      // @ts-ignore
      [notify, propsNotify,];
    }
  };
  (__VLS_149.slots).default;
  const __VLS_149 = __VLS_pickFunctionalComponentCtx(__VLS_144, __VLS_146);
  let __VLS_147;
  let __VLS_148;
  __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
  // @ts-ignore
  const __VLS_152 = {}
    .MLink;
  ({}.MLink);
  ({}.MLink);
  __VLS_components.MLink;
  __VLS_components.mLink;
  __VLS_components.MLink;
  __VLS_components.mLink;
  // @ts-ignore
  [MLink, MLink,];
  // @ts-ignore
  const __VLS_153 = __VLS_asFunctionalComponent(__VLS_152, new __VLS_152({ ...{ style: ({}) }, href: ("/"), }));
  const __VLS_154 = __VLS_153({ ...{ style: ({}) }, href: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_153));
  ({}({ ...{ style: ({}) }, href: ("/"), }));
  (__VLS_157.slots).default;
  const __VLS_157 = __VLS_pickFunctionalComponentCtx(__VLS_152, __VLS_154);
  // @ts-ignore
  const __VLS_158 = {}
    .MLink;
  ({}.MLink);
  ({}.MLink);
  __VLS_components.MLink;
  __VLS_components.mLink;
  __VLS_components.MLink;
  __VLS_components.mLink;
  // @ts-ignore
  [MLink, MLink,];
  // @ts-ignore
  const __VLS_159 = __VLS_asFunctionalComponent(__VLS_158, new __VLS_158({ ...{ style: ({}) }, type: ("primary"), href: ("/"), }));
  const __VLS_160 = __VLS_159({ ...{ style: ({}) }, type: ("primary"), href: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_159));
  ({}({ ...{ style: ({}) }, type: ("primary"), href: ("/"), }));
  (__VLS_163.slots).default;
  const __VLS_163 = __VLS_pickFunctionalComponentCtx(__VLS_158, __VLS_160);
  // @ts-ignore
  const __VLS_164 = {}
    .MLink;
  ({}.MLink);
  ({}.MLink);
  __VLS_components.MLink;
  __VLS_components.mLink;
  __VLS_components.MLink;
  __VLS_components.mLink;
  // @ts-ignore
  [MLink, MLink,];
  // @ts-ignore
  const __VLS_165 = __VLS_asFunctionalComponent(__VLS_164, new __VLS_164({ ...{ style: ({}) }, type: ("success"), href: ("/"), }));
  const __VLS_166 = __VLS_165({ ...{ style: ({}) }, type: ("success"), href: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_165));
  ({}({ ...{ style: ({}) }, type: ("success"), href: ("/"), }));
  (__VLS_169.slots).default;
  const __VLS_169 = __VLS_pickFunctionalComponentCtx(__VLS_164, __VLS_166);
  // @ts-ignore
  const __VLS_170 = {}
    .MLink;
  ({}.MLink);
  ({}.MLink);
  __VLS_components.MLink;
  __VLS_components.mLink;
  __VLS_components.MLink;
  __VLS_components.mLink;
  // @ts-ignore
  [MLink, MLink,];
  // @ts-ignore
  const __VLS_171 = __VLS_asFunctionalComponent(__VLS_170, new __VLS_170({ ...{ style: ({}) }, type: ("info"), href: ("/"), }));
  const __VLS_172 = __VLS_171({ ...{ style: ({}) }, type: ("info"), href: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_171));
  ({}({ ...{ style: ({}) }, type: ("info"), href: ("/"), }));
  (__VLS_175.slots).default;
  const __VLS_175 = __VLS_pickFunctionalComponentCtx(__VLS_170, __VLS_172);
  // @ts-ignore
  const __VLS_176 = {}
    .MLink;
  ({}.MLink);
  ({}.MLink);
  __VLS_components.MLink;
  __VLS_components.mLink;
  __VLS_components.MLink;
  __VLS_components.mLink;
  // @ts-ignore
  [MLink, MLink,];
  // @ts-ignore
  const __VLS_177 = __VLS_asFunctionalComponent(__VLS_176, new __VLS_176({ ...{ style: ({}) }, type: ("warning"), href: ("/"), }));
  const __VLS_178 = __VLS_177({ ...{ style: ({}) }, type: ("warning"), href: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_177));
  ({}({ ...{ style: ({}) }, type: ("warning"), href: ("/"), }));
  (__VLS_181.slots).default;
  const __VLS_181 = __VLS_pickFunctionalComponentCtx(__VLS_176, __VLS_178);
  // @ts-ignore
  const __VLS_182 = {}
    .MLink;
  ({}.MLink);
  ({}.MLink);
  __VLS_components.MLink;
  __VLS_components.mLink;
  __VLS_components.MLink;
  __VLS_components.mLink;
  // @ts-ignore
  [MLink, MLink,];
  // @ts-ignore
  const __VLS_183 = __VLS_asFunctionalComponent(__VLS_182, new __VLS_182({ ...{ style: ({}) }, type: ("danger"), href: ("/"), }));
  const __VLS_184 = __VLS_183({ ...{ style: ({}) }, type: ("danger"), href: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_183));
  ({}({ ...{ style: ({}) }, type: ("danger"), href: ("/"), }));
  (__VLS_187.slots).default;
  const __VLS_187 = __VLS_pickFunctionalComponentCtx(__VLS_182, __VLS_184);
  __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
  // @ts-ignore
  const __VLS_188 = {}
    .MLink;
  ({}.MLink);
  ({}.MLink);
  __VLS_components.MLink;
  __VLS_components.mLink;
  __VLS_components.MLink;
  __VLS_components.mLink;
  // @ts-ignore
  [MLink, MLink,];
  // @ts-ignore
  const __VLS_189 = __VLS_asFunctionalComponent(__VLS_188, new __VLS_188({ disabled: (true), ...{ style: ({}) }, href: ("/"), }));
  const __VLS_190 = __VLS_189({ disabled: (true), ...{ style: ({}) }, href: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_189));
  ({}({ disabled: (true), ...{ style: ({}) }, href: ("/"), }));
  (__VLS_193.slots).default;
  const __VLS_193 = __VLS_pickFunctionalComponentCtx(__VLS_188, __VLS_190);
  // @ts-ignore
  const __VLS_194 = {}
    .MLink;
  ({}.MLink);
  ({}.MLink);
  __VLS_components.MLink;
  __VLS_components.mLink;
  __VLS_components.MLink;
  __VLS_components.mLink;
  // @ts-ignore
  [MLink, MLink,];
  // @ts-ignore
  const __VLS_195 = __VLS_asFunctionalComponent(__VLS_194, new __VLS_194({ disabled: (true), ...{ style: ({}) }, type: ("primary"), href: ("/"), }));
  const __VLS_196 = __VLS_195({ disabled: (true), ...{ style: ({}) }, type: ("primary"), href: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_195));
  ({}({ disabled: (true), ...{ style: ({}) }, type: ("primary"), href: ("/"), }));
  (__VLS_199.slots).default;
  const __VLS_199 = __VLS_pickFunctionalComponentCtx(__VLS_194, __VLS_196);
  // @ts-ignore
  const __VLS_200 = {}
    .MLink;
  ({}.MLink);
  ({}.MLink);
  __VLS_components.MLink;
  __VLS_components.mLink;
  __VLS_components.MLink;
  __VLS_components.mLink;
  // @ts-ignore
  [MLink, MLink,];
  // @ts-ignore
  const __VLS_201 = __VLS_asFunctionalComponent(__VLS_200, new __VLS_200({ disabled: (true), ...{ style: ({}) }, type: ("success"), href: ("/"), }));
  const __VLS_202 = __VLS_201({ disabled: (true), ...{ style: ({}) }, type: ("success"), href: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_201));
  ({}({ disabled: (true), ...{ style: ({}) }, type: ("success"), href: ("/"), }));
  (__VLS_205.slots).default;
  const __VLS_205 = __VLS_pickFunctionalComponentCtx(__VLS_200, __VLS_202);
  // @ts-ignore
  const __VLS_206 = {}
    .MLink;
  ({}.MLink);
  ({}.MLink);
  __VLS_components.MLink;
  __VLS_components.mLink;
  __VLS_components.MLink;
  __VLS_components.mLink;
  // @ts-ignore
  [MLink, MLink,];
  // @ts-ignore
  const __VLS_207 = __VLS_asFunctionalComponent(__VLS_206, new __VLS_206({ disabled: (true), ...{ style: ({}) }, type: ("info"), href: ("/"), }));
  const __VLS_208 = __VLS_207({ disabled: (true), ...{ style: ({}) }, type: ("info"), href: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_207));
  ({}({ disabled: (true), ...{ style: ({}) }, type: ("info"), href: ("/"), }));
  (__VLS_211.slots).default;
  const __VLS_211 = __VLS_pickFunctionalComponentCtx(__VLS_206, __VLS_208);
  // @ts-ignore
  const __VLS_212 = {}
    .MLink;
  ({}.MLink);
  ({}.MLink);
  __VLS_components.MLink;
  __VLS_components.mLink;
  __VLS_components.MLink;
  __VLS_components.mLink;
  // @ts-ignore
  [MLink, MLink,];
  // @ts-ignore
  const __VLS_213 = __VLS_asFunctionalComponent(__VLS_212, new __VLS_212({ disabled: (true), ...{ style: ({}) }, type: ("warning"), href: ("/"), }));
  const __VLS_214 = __VLS_213({ disabled: (true), ...{ style: ({}) }, type: ("warning"), href: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_213));
  ({}({ disabled: (true), ...{ style: ({}) }, type: ("warning"), href: ("/"), }));
  (__VLS_217.slots).default;
  const __VLS_217 = __VLS_pickFunctionalComponentCtx(__VLS_212, __VLS_214);
  // @ts-ignore
  const __VLS_218 = {}
    .MLink;
  ({}.MLink);
  ({}.MLink);
  __VLS_components.MLink;
  __VLS_components.mLink;
  __VLS_components.MLink;
  __VLS_components.mLink;
  // @ts-ignore
  [MLink, MLink,];
  // @ts-ignore
  const __VLS_219 = __VLS_asFunctionalComponent(__VLS_218, new __VLS_218({ disabled: (true), ...{ style: ({}) }, type: ("danger"), href: ("/"), }));
  const __VLS_220 = __VLS_219({ disabled: (true), ...{ style: ({}) }, type: ("danger"), href: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_219));
  ({}({ disabled: (true), ...{ style: ({}) }, type: ("danger"), href: ("/"), }));
  (__VLS_223.slots).default;
  const __VLS_223 = __VLS_pickFunctionalComponentCtx(__VLS_218, __VLS_220);
  __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
  // @ts-ignore
  const __VLS_224 = {}
    .MInput;
  ({}.MInput);
  __VLS_components.MInput;
  __VLS_components.mInput;
  // @ts-ignore
  [MInput,];
  // @ts-ignore
  const __VLS_225 = __VLS_asFunctionalComponent(__VLS_224, new __VLS_224({ modelValue: ((__VLS_ctx.testVal)), placeholder: ("placeholder"), }));
  const __VLS_226 = __VLS_225({ modelValue: ((__VLS_ctx.testVal)), placeholder: ("placeholder"), }, ...__VLS_functionalComponentArgsRest(__VLS_225));
  ({}({ modelValue: ((__VLS_ctx.testVal)), placeholder: ("placeholder"), }));
  // @ts-ignore
  [testVal,];
  const __VLS_229 = __VLS_pickFunctionalComponentCtx(__VLS_224, __VLS_226);
  (__VLS_ctx.testVal);
  // @ts-ignore
  [testVal,];
  if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
  }
  let __VLS_slots;
  return __VLS_slots;
  const __VLS_componentsOption = {};
  let __VLS_name;
  let __VLS_defineComponent;
  const __VLS_internalComponent = __VLS_defineComponent({
    setup() {
      return {
        MButton: MButton,
        MLink: MLink,
        MInput: MInput,
        propsNotify: propsNotify,
        testVal: testVal,
        notify: notify,
      };
    },
  });
}
export default (await import('vue')).defineComponent({
  setup() {
    return {};
  },
});
;
//# sourceMappingURL=App.vue.js.map