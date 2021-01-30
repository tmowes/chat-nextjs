declare module '*.png'

declare module '*.svg' {
  const content: unknown
  export default content
}

declare module 'react-chat-engine'
