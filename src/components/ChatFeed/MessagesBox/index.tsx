/* eslint-disable react/no-array-index-key */
import MessageItem from './MessageItem'
import * as S from './styles'
import { MessagesBoxProps } from './types'

const MessagesBox = (props: MessagesBoxProps) => {
  const { message, lastMessage, isMyMessage, chat } = props

  return (
    <S.Container>
      <S.Block>
        <MessageItem
          message={message}
          lastMessage={lastMessage}
          isMyMessage={isMyMessage}
        />
      </S.Block>
      <S.ReadStatus isMyMessage={isMyMessage}>
        {chat.people.map(
          ({ last_read, person }, index) =>
            last_read === message.id && (
              <S.ReadReceipt
                key={`read_${index}`}
                isMyMessage={isMyMessage}
                backgroundImage={person.avatar}
              />
            ),
        )}
      </S.ReadStatus>
    </S.Container>
  )
}

export default MessagesBox
