import React from 'react'

import * as S from './styles'
import { MessageItemProps } from './types'

const MessageItem = (props: MessageItemProps) => {
  const { message, lastMessage } = props
  const { text, attachments } = message

  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username

  return (
    <S.Container>
      {isFirstMessageByUser && (
        <S.MessageAvatar
          style={{
            backgroundImage: message.sender && `url(${message.sender.avatar})`,
          }}
        />
      )}
      {attachments && attachments.length > 0 ? (
        <S.MessageImage src={attachments[0].file} alt="message-attachment" />
      ) : (
        <S.MessageText>{text}</S.MessageText>
      )}
    </S.Container>
  )
}

export default MessageItem
