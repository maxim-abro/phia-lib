export interface IPaginationProps {
  modelValue: number;
  pages: number;
  disabled?: boolean;
  visibleLength?: number;
  // todo
  arrowsOnly?: boolean;
}

export interface IPaginationEmits {
  (e: 'update:modelValue', value: number): void;
}
