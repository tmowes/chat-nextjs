import styled, { css } from 'styled-components'
import { IsMyMessageProps } from './types'

export const Container = styled.div``

export const ReadReceipt = styled.div<IsMyMessageProps>`
  ${({ isMyMessage, backgroundImage }) => css`
    width: 13px;
    height: 13px;
    border-radius: 13px;
    margin: 1.5px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 14px;
    ${backgroundImage &&
    css`
      background-image: url(${backgroundImage});
    `}
    ${isMyMessage &&
    css`
      float: right;
    `}
  `}
`

export const Block = styled.div``

export const ReadStatus = styled.div<IsMyMessageProps>`
  ${({ isMyMessage }) => css`
    position: relative;
    bottom: 6px;
    ${isMyMessage &&
    css`
      float: right;
    `}
  `}
`
