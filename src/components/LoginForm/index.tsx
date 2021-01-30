import axios from 'axios'
import React, { FormEvent, useState } from 'react'

import * as S from './styles'

const projectID = process.env.NEXT_PUBLIC_CHAT_ID

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const authObject = {
      'Project-ID': projectID,
      'User-Name': username,
      'User-Secret': password,
    }

    try {
      await axios.get('https://api.chatengine.io/chats', {
        headers: authObject,
      })

      if (typeof window !== 'undefined') {
        localStorage.setItem('chat-username', username)
        localStorage.setItem('chat-password', password)
      }
      window.location.reload()
      setError('')
    } catch (err) {
      setError('Oops, incorrect credentials.')
    }
  }
  return (
    <S.Container>
      <S.Content>
        <S.Title>Chat Application</S.Title>
        <S.Form onSubmit={handleSubmit}>
          <S.Input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <S.Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <S.LoginButton>
            <S.Label>Start chatting</S.Label>
          </S.LoginButton>
        </S.Form>
        <S.ErrorMessage>{error}</S.ErrorMessage>
      </S.Content>
    </S.Container>
  )
}

export default LoginForm
