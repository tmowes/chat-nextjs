import { PictureOutlined, SendOutlined } from '@ant-design/icons'
import styled from 'styled-components'

export const Form = styled.form`
  overflow: hidden;
  border-radius: 6px;
  border: 1px solid #3b2a50;
  background-color: white;
`

export const Input = styled.input`
  height: 40px;
  width: calc(100% - 132px);
  background-color: white;
  border: 1px solid white;
  padding: 0px 18px;
  outline: none;
  font-size: 15px;
`

export const PictureIcon = styled(PictureOutlined)`
  top: 1px;
  position: relative;
  font-size: 14px;
`
export const SendIcon = styled(SendOutlined)`
  top: 1px;
  position: relative;
  /* transform: rotate(-90deg); */
`

export const FakeInput = styled.input.attrs({
  type: 'file',
  multiple: false,
})`
  display: none;
`
export const UploadButton = styled.label``
export const UploadImage = styled.span`
  cursor: pointer;
  padding: 0px 12px;
  height: 100%;
`

export const SendButton = styled.button.attrs({
  type: 'submit',
})`
  height: 42px;
  background-color: white;
  border: 1px solid white;
  padding: 0px 18px;
  cursor: pointer;
`
