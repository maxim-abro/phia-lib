export interface IPropsSelect {
    modelValue: boolean | string | number;
    multiple?: boolean;
    disabled?: boolean;
    valueKey?: string | null;
    titleKey?: string | null;
    placeholder?: string;
    loading?: boolean;
    noDataText?: string;
    values: (string | number | Record<string, string | number | boolean>)[];
}
export interface IEmitsSelect {
    (e: 'change', value: boolean | string | number): void;
    (e: 'focus'): void;
    (e: 'blur'): void;
    (e: 'update:modelValue', value: boolean | string | number): void;
}
//# sourceMappingURL=types.d.ts.map