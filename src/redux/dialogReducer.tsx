const ADDNEWMESSAGE = 'addNewMessage';
const UPDATENEWMESSAGETEXT = 'updateNewMessageText';

export const addNewMessageAC = () => ({ type: ADDNEWMESSAGE })
export const updateNewMessageTextAC = (value: string) => ({ type: UPDATENEWMESSAGETEXT, value })

export type DialogType = {
  id: number,
  name: string
}
export type MessageType = {
  id: number,
  text: string
}
export type DialogDataType = {
  dialogs: DialogType[]
  messages: MessageType[]
  newMessageText: string
}

const initS = {
  dialogs: [
    { id: 1, name: 'Lee' },
    { id: 2, name: 'Kim' },
    { id: 3, name: 'John' }
  ],
  messages: [
    { id: 1, text: 'Hallo everybody' },
    { id: 2, text: 'Hey, zuuuup!' },
    { id: 3, text: 'yo' },
    { id: 4, text: 'Hey guys!' },
  ],
  newMessageText: 'this is a place for your message'
}

export const dialogReducer = (state: DialogDataType = initS, action: any) => {
  switch (action.type) {
    case ADDNEWMESSAGE: {
      state.messages.push({ id: 5, text: state.newMessageText })
      state.newMessageText = '';
      return state;
    }
    case UPDATENEWMESSAGETEXT: {
      state.newMessageText = action.value;
      return state;
    }
    default: return state
  }
}