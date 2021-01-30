import Link from 'next/link'
import { shade, tint } from 'polished'
import styled, { css } from 'styled-components'
import { CustomLinkFontProps, CustomLinkVariantProps } from './types'

const variants = {
  white: css`
    ${({ theme: { colors } }) => css`
      color: ${colors.white};
      background: ${colors.transparent};
      :hover {
        color: ${tint(0.16, colors.white)};
      }
      :active {
        color: ${shade(0.16, colors.white)};
      }
    `}
  `,
  default: css`
    ${({ theme: { colors } }) => css`
      color: ${colors.orange};
      background: ${colors.transparent};
      :hover {
        color: ${tint(0.16, colors.orange)};
      }
      :active {
        color: ${shade(0.16, colors.orange)};
      }
    `}
  `,
}

const fonts = {
  xl: css`
    font-size: 2.4em;
  `,
  normal: css`
    font-size: 1.4em;
  `,
}

export const Container = styled(Link)``

export const Content = styled.div<CustomLinkVariantProps>`
  ${({ variant }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 180ms ease-in-out;
    ${variant && variants[variant]};
  `}
`

export const Label = styled.span<CustomLinkFontProps>`
  ${({ font }) => css`
    margin: 0 0.8rem;
    ${font && fonts[font]};
    :hover,
    :active {
      text-decoration: underline;
    }
  `}
`
