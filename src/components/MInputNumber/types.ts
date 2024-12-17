export interface IInputNumberProps {
  steps?: number
  min?: number
  max?: number
  disabled?: boolean
  modelValue?: number
}

export interface IInputNumberEmits {
  (e: 'update:modelValue', value: number): void
}
