/* eslint-disable react/jsx-curly-newline */
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { ChatEngine } from 'react-chat-engine'

import * as C from '~/components'
import { ChatFeedProps } from '~/components/ChatFeed/types'
import * as S from '~/styles/pages/chat'

const projectID = process.env.NEXT_PUBLIC_CHAT_ID

const Chat: NextPage = () => {
  const [user, setUser] = useState({ userName: '', userSecret: '' })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('we are running on the client')
      const userName = window.localStorage.getItem('chat-username')
      const userSecret = window.localStorage.getItem('chat-password')
      setUser({ userName, userSecret })
    }
  }, [])

  const { userName, userSecret } = user

  return (
    <S.Container>
      {userName === '' ? (
        <C.LoginForm />
      ) : (
        <ChatEngine
          height="92vh"
          projectID={projectID}
          userName={userName}
          userSecret={userSecret}
          renderChatFeed={(chatAppProps: ChatFeedProps) => (
            <C.ChatFeed {...chatAppProps} />
          )}
          onNewMessage={() =>
            new Audio(
              'https://chat-engine-assets.s3.amazonaws.com/click.mp3',
            ).play()
          }
        />
      )}
    </S.Container>
  )
}

export default Chat
