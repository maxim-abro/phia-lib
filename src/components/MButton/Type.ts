export interface IButtonProps {
  /**
   * Размер кнопки
   */
  size?: IBtnSize
  /** Цвет кнопки  */
  type?: IBtnType
  /** Округлые края */
  round?: boolean
  link?: string
  loading?: boolean
  /** Кнопка не автивная */
  disabled?: boolean
  /** иконка  */
  icon?: boolean
  /** Вид кнопки  */
  plain?: boolean
}

type IBtnSize = 'large' | 'default'| 'small'
type IBtnType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'

export interface IButtonSlots {
  /** Стандартный слот  */
  default(props: {}): any;
}