export interface IPropsSelect {
  modelValue: boolean | string | number;
  multiple?: boolean;
  disabled?: boolean;
  valueKey?: string;
  placeholder?: string;
  loading?: boolean;
  noDataText?: string;
}

export interface IEmitsSelect {
  (e: 'change', value: boolean | string | number): void;
  (e: 'focus'): void;
  (e: 'blur'): void;
  (e: 'update:modelValue', value: boolean | string | number): void;
}