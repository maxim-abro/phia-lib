export interface ISelectProps {
  modelValue: ISelectModelValue;
  multiple?: boolean;
  disabled?: boolean;
  valueKey?: string;
  clearable?: boolean;
  placeholder?: string;
}

export interface IOptionSelectProps {
  value: ISelectModelValue;
  label: string | number;
  disabled?: boolean;
}

export interface ISelectEmits {
  (e: 'update:modelValue', value: ISelectModelValue): void;
}

export type ISelectModelValue =string|number|object|unknown[];