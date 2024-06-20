export interface IBadgeProps {
  value?: string | number;
  max?: number;
  isDot?: boolean;
  hidden?: boolean;
  type?: Type;
  showZero?: boolean;
}

export type Type = 'primary' | 'success' | 'warning' | 'danger' | 'info';