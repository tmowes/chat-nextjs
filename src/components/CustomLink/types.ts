import { LinkProps } from 'next/link'
import type { IconBaseProps } from 'react-icons'

export interface CustomLinkProps extends LinkProps {
  icon?: React.ComponentType<IconBaseProps>
  size?: number
  label: string
  font?: 'normal' | 'xl'
  variant?: 'default' | 'white'
}

export interface CustomLinkVariantProps {
  variant?: 'default' | 'white'
}

export interface CustomLinkFontProps {
  font?: 'normal' | 'xl'
}
