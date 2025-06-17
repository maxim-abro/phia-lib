

export interface ITimeSelectProps {
  /** не активно */
  disabled?: boolean;
  /** Можно очищать */
  clearable?: boolean;
  /** Текст, когда ничего не выбрано */
  placeholder?: string;
  /** Начальное значение */
  start?: string;
  /** Конечное значение */
  end?: string;
  /** Шаг изменения времени */
  step?: string;
  /** Значение */
  modelValue?: string | null;
}

export interface ITimeSelectEmits {
  (e: 'update:modelValue', value?: string | null): void;
}
