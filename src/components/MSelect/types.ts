export interface IPropsSelect {
  //** Значение инпута *//
  modelValue: boolean | string | number;
  // todo доделать множественный выбор.
  //** Выбор нескольких значений *//
  multiple?: boolean;
  //** Заблокирован элемент *//
  disabled?: boolean;
  //** Ключ для modelValue *//
  valueKey?: string;
  //** Ключ для названия выбранного modelValue *//
  titleKey?: string;
  //** Значение, когда ничего не выбрано *//
  placeholder?: string;
  // todo доделать загрузку.
  //** Ключ для загрузки *//
  loading?: boolean;
  //** Значение, когда нет элементов *//
  noDataText?: string;
  //** Список значений *//
  values: unknown[];
}

export interface IEmitsSelect {
  (e: 'change', value: boolean | string | number): void;
  (e: 'focus'): void;
  (e: 'blur'): void;
  (e: 'update:modelValue', value: boolean | string | number): void;
}