export interface IBadgeProps {
  /** Значение */
  value?: string | number;
  /** Максимальное значение. Выше максимального значение будет показываться например "25+" */
  max?: number;
  /** Показывать точку, вместо значения */
  isDot?: boolean;
  /** Скрыть бейдж */
  hidden?: boolean;
  /** Цвет бейджа */
  type: Type;
  /** Показывать ноль */
  showZero?: boolean;
}

export type Type = 'primary' | 'success' | 'warning' | 'danger' | 'info';
