import { IPropsSelect } from './types';

declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IPropsSelect>, {
    valueKey: string;
    titleKey: string;
    placeholder: string;
    noDataText: string;
}>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    change: (value: string | number | boolean) => void;
    focus: () => void;
    blur: () => void;
    "update:modelValue": (value: string | number | boolean) => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IPropsSelect>, {
    valueKey: string;
    titleKey: string;
    placeholder: string;
    noDataText: string;
}>>> & {
    onFocus?: (() => any) | undefined;
    onBlur?: (() => any) | undefined;
    onChange?: ((value: string | number | boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
}, {
    placeholder: string;
    valueKey: string;
    titleKey: string;
    noDataText: string;
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
//# sourceMappingURL=index.vue.d.ts.map