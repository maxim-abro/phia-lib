export interface IDialogProps {
  modelValue: boolean;
  width?: number | string;
  height?: number | string;
}

export interface IDialogEmits {
  (e: 'update:modelValue', value: boolean): void;
}
