export interface MInputProps {
    type: MInputType;
    placeholder?: string;
    minLength?: number;
    maxLength?: number;
    showWordLimit?: boolean;
    clearable?: boolean;
    disabled?: boolean;
    autofocus?: boolean;
    autocomplete?: string;
    modelValue?: string | number;
    formatter?: (value: string | number) => string | number;
}
export interface MInputEmits {
    (e: 'blur', value: FocusEvent): void;
    (e: 'focus', value: FocusEvent): void;
    (e: 'change', value: string | number): void;
    (e: 'input', value: InputEvent): void;
    (e: 'clear'): void;
    (e: 'update:modelValue', value: string | number): void;
}
export type MInputType = 'text' | 'textarea' | 'password' | 'button' | 'number';
//# sourceMappingURL=Type.d.ts.map