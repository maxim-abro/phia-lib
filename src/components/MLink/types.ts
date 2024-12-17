export interface ILinkProps {
  /** Цвет ссылки */
  type?: TLinkType;
  /** Нижнее подчёркивание при наведении */
  underline?: boolean;
  /** Ссылка не активна */
  disabled?: boolean;
  /** Стандартный атрибут ссылки */
  target?: TLinkTarget;
  /** Ссылка */
  href: string;
}

type TLinkType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default';
type TLinkTarget = '_blank' | '_parent' | '_self' | '_top';
