import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: rgb(117, 84, 160);
  background: linear-gradient(
    90deg,
    rgba(117, 84, 160, 1) 7%,
    rgba(117, 84, 160, 1) 17%,
    rgba(106, 95, 168, 1) 29%,
    rgba(99, 103, 174, 1) 44%,
    rgba(87, 116, 184, 1) 66%,
    rgba(70, 135, 198, 1) 83%,
    rgba(44, 163, 219, 1) 96%,
    rgba(22, 188, 237, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 40rem;
`

export const Title = styled.h1`
  text-align: center;
  color: white;
  margin-bottom: 30px;
  width: 100%;
  font-size: 2.3em;
`

export const Form = styled.form``

export const Input = styled.input`
  color: #333;
  font-size: 1.2rem;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  border-radius: 0.2rem;
  background-color: rgb(255, 255, 255);
  border: none;
  width: 90%;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;
  outline: none;
  margin-bottom: 25px;
`

export const LoginButton = styled.button`
  border-radius: 4px;
  border: none;
  background-color: white;
  color: black;
  text-align: center;
  text-transform: uppercase;
  font-size: 22px;
  padding: 20px;
  width: 200px;
  transition: all 0.4s;
  cursor: pointer;
  margin: 5px;
  width: 90%;
  margin: 0 auto;
`

export const Label = styled.span`
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.4s;
  &::after {
    content: '\00bb';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }
`
export const ErrorMessage = styled.span`
  color: white;
  text-align: center;
  margin-top: 20px;
`
