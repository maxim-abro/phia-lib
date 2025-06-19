import { IPropsSelect } from './types';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IPropsSelect>, {
    valueKey: string;
    titleKey: string;
    placeholder: string;
    noDataText: string;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (value: string | number | boolean) => void;
    focus: () => void;
    blur: () => void;
    "update:modelValue": (value: string | number | boolean) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<IPropsSelect>, {
    valueKey: string;
    titleKey: string;
    placeholder: string;
    noDataText: string;
}>>> & Readonly<{
    onBlur?: (() => any) | undefined;
    onChange?: ((value: string | number | boolean) => any) | undefined;
    onFocus?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
}>, {
    placeholder: string;
    valueKey: string | null;
    titleKey: string | null;
    noDataText: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
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