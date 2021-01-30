import styled from 'styled-components'

export const Container = styled.div`
  float: left;
  width: 100%;
  display: flex;
  margin-left: 18px;
`

export const MessageText = styled.div`
  float: right;
  margin-right: 18px;
  color: white;
  background: #3b2a50;
`

export const MessageImage = styled.img`
  float: right;
  margin-right: 18px;
  object-fit: cover;
  border-radius: 6px;
  height: 30vw;
  max-height: 200px;
  max-width: 200px;
  min-height: 100px;
  min-width: 100px;
`

export const MessageAvatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  color: white;
  text-align: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 48px;
`
