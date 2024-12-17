export interface IButtonProps {
  size?: IBtnSize
  type?: IBtnType
  round?: boolean
  link?: string
  loading?: boolean
  disabled?: boolean
  icon?: boolean
  plain?: boolean
}

type IBtnSize = 'large' | 'default' | 'small'
type IBtnType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
