export interface MInputProps {
  /** Стандартный атрибут инпута */
  type?: TInputType;
  /** Стандартный атрибут инпута */
  placeholder?: string;
  /** Максимальная длина символов */
  maxLength?: number;
  /** Возможность очистки инпута */
  clearable?: boolean;
  /** Стандартный атрибут инпута */
  disabled?: boolean;
  /** Стандартный атрибут инпута */
  autocomplete?: string;
  /** Значение инпута */
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

export type TInputType = 'text' | 'textarea' | 'password' | 'button' | 'number';
