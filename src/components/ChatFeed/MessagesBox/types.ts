import { ChatProps, MessageProps } from '../types'

export type MessagesBoxProps = {
  message: MessageProps
  lastMessage: MessageProps
  isMyMessage: boolean
  chat: ChatProps
}

export type IsMyMessageProps = {
  isMyMessage: boolean
  backgroundImage?: string
}
