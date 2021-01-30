export type ChatFeedProps = {
  chats: ChatProps[]
  activeChat: number
  userName: string
  messages: MessageProps[]
  creds: CredsProps
}

type CredsProps = {
  height: string
  projectID: string
  userName: string
  userSecret: string
}

export type ChatProps = {
  id: number
  title: string
  created: Date
  last_message: LastMessageProps
  attachments: AttachmentsProps
  admin: AdminProps
  people: PeopleProps[]
}

type AdminProps = {
  username: string
  first_name: string
  last_name: string
  avatar: string
  is_online: boolean
}
type PeopleProps = {
  person: AdminProps
  last_read: number | null
}

type LastMessageProps = {
  created: Date
  attachments: AttachmentsProps
  text: string
}

export type MessageProps = {
  id: number
  sender: AdminProps
  text: string
  attachments: AttachmentsProps
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AttachmentsProps = any[]
