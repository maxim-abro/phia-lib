import { MInputProps } from './Type';

declare const _default: import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<MInputProps>, {
    type: string;
    modelValue: string;
    autocomplete: string;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    blur: (value: FocusEvent) => void;
    focus: (value: FocusEvent) => void;
    change: (value: string | number) => void;
    input: (value: InputEvent) => void;
    clear: () => void;
    "update:modelValue": (value: string) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<MInputProps>, {
    type: string;
    modelValue: string;
    autocomplete: string;
}>>> & {
    onFocus?: ((value: FocusEvent) => any) | undefined;
    onBlur?: ((value: FocusEvent) => any) | undefined;
    onChange?: ((value: string | number) => any) | undefined;
    onInput?: ((value: InputEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onClear?: (() => any) | undefined;
}, {
    type: import('./Type').MInputType;
    modelValue: string;
    autocomplete: string;
}, {}>;
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