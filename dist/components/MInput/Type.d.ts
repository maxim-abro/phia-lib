export interface MInputProps {
    type?: MInputType;
    placeholder?: string;
    maxLength?: number;
    clearable?: boolean;
    disabled?: boolean;
    autocomplete?: string;
    modelValue?: string;
    formatter?: (value: string | number) => string;
}
export interface MInputEmits {
    (e: 'blur', value: FocusEvent): void;
    (e: 'focus', value: FocusEvent): void;
    (e: 'change', value: string | number): void;
    (e: 'input', value: InputEvent): void;
    (e: 'clear'): void;
    (e: 'update:modelValue', value: string): void;
}
export type MInputType = 'text' | 'textarea' | 'password' | 'button' | 'number';
//# sourceMappingURL=Type.d.ts.map