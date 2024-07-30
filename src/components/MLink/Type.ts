export interface ILinkProps {
  /** Цвет ссылки */
  type?: ILinkType
  /** Нижнее подчёркивание при наведении */
  underline?: boolean
  /** Ссылка не активна */
  disabled?: boolean
  /** Стандартный атрибут ссылки */
  target?: ILinkTarget
  /** Ссылка */
  href: string
}

type ILinkType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
type ILinkTarget = '_blank' | '_parent' | '_self' | '_top'
