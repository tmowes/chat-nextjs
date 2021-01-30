import { ChangeEvent, FormEvent, useState } from 'react'
import { isTyping, sendMessage } from 'react-chat-engine'
import * as S from './styles'
import { MessageFormProps } from './types'

const MessageForm = (props: MessageFormProps) => {
  const { chatId, creds } = props
  const [value, setValue] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const text = value.trim()
    if (text.length > 0) {
      sendMessage(creds, chatId, { text })
    }
    setValue('')
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    isTyping(props, chatId)
  }

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    sendMessage(creds, chatId, { files: e.target.files, text: '' })
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
      />
      <S.UploadButton htmlFor="upload-button">
        <S.UploadImage>
          <S.PictureIcon />
        </S.UploadImage>
      </S.UploadButton>
      <S.FakeInput id="upload-button" onChange={handleUpload} />
      <S.SendButton>
        <S.SendIcon />
      </S.SendButton>
    </S.Form>
  )
}

export default MessageForm
