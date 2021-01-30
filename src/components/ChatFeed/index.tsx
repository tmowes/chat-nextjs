/* eslint-disable react/no-array-index-key */
import React from 'react'
import MessageForm from './MessageForm'
import MessagesBox from './MessagesBox'

import * as S from './styles'
import { ChatFeedProps, MessageProps } from './types'

const ChatFeed = (props: ChatFeedProps) => {
  const { chats, activeChat, userName, messages } = props

  const chat = chats && chats[activeChat]

  if (!chat) return <h1>Loading...</h1>

  const chatTitle = chat.title

  const chatSubTitle = chat.people.map(({ person }) => ` ${person.username}`)
  // console.log(JSON.stringify(creds))
  // console.log(JSON.stringify(userName))
  // console.log(JSON.stringify(messages))
  const keys = Object.keys(messages)

  return (
    <S.Container>
      <S.Header>
        <S.Title>{chatTitle}</S.Title>
        <S.SubTitle>{chatSubTitle}</S.SubTitle>
      </S.Header>
      {keys.map((key, index) => {
        const message: MessageProps = messages[key]
        const lastMessageKey = index === 0 ? null : keys[index - 1]
        const lastMessage: MessageProps = messages[lastMessageKey]
        const isMyMessage = userName === message.sender.username
        return (
          <MessagesBox
            key={`message_id_${key}-${index}`}
            message={message}
            lastMessage={lastMessage}
            isMyMessage={isMyMessage}
            chat={chat}
          />
        )
      })}

      <S.FormContainer>
        <MessageForm {...props} chatId={activeChat} />
      </S.FormContainer>
    </S.Container>
  )
}

export default ChatFeed
