export type MessagesType = Array<MessageType>
export type MessageType = {
  id: number,
  text: string
}

export type DialogType = {
  id: number,
  name: string
}

export type PostType = {
  id: number,
  text: string
}

export type DataType = {
  dialogsData: DialogType[]
  messagesData: MessageType[]
  postsData: PostType[]
}

export const data = {
  dialogsData: [
    { id: 1, name: 'Lee' },
    { id: 2, name: 'Kim' },
    { id: 3, name: 'John' }
  ],
  messagesData: [
    { id: 1, text: 'Hallo everybody' },
    { id: 2, text: 'Hey, zuuuup!' },
    { id: 3, text: 'yo' },
    { id: 4, text: 'Hey guys!' },
  ],
  postsData: [
    { id: 1, text: 'post1' },
    { id: 2, text: 'post2' },
    { id: 3, text: 'post3' }
  ]
}