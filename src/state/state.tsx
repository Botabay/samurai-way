export type MessagesType=Array<MessageType>
type MessageType={
  id:number,
  text:string
}
export const messages = [
    { id: 1, text: 'Hallo everybody' },
    { id: 2, text: 'Hey, zuuuup!' },
    { id: 3, text: 'yo' },
    { id: 4, text: 'Hey guys!' },
]