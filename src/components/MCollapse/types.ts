export interface ICollapseProps {
  /** Телепорт скрываемой части */
  toTeleport?: HTMLElement | string;
  /** Значение открытия скрываемой части */
  modelValue?: boolean;
}

export interface ICollapseEmits {
  (e: 'update:modelValue', value: boolean): void;
}

export interface ICollapseSlots {
  /** Триггер */
  default(props: object): unknown;
  /** Скрываемая часть */
  expand(props: object): unknown;
}
