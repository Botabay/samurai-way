const ADDNEWMESSAGE = 'addNewMessage';
const UPDATENEWMESSAGETEXT = 'updateNewMessageText';
type addNewMessageACType = {
    type: string
}
type updateNewMessageTextACType = {
    type: string
    value: string
}
export const addNewMessageAC = (): addNewMessageACType => ({ type: ADDNEWMESSAGE }) as const;
export const updateNewMessageTextAC =
    (value: string): updateNewMessageTextACType => ({ type: UPDATENEWMESSAGETEXT, value }) as const;

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

export type DialogsACType = addNewMessageACType | updateNewMessageTextACType

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

export const dialogReducer = (state: DialogDataType = initS, action: any): DialogDataType => {
    // console.log(action)
    switch (action.type) {
        case ADDNEWMESSAGE: {
        //     state.messages.push({ id: 5, text: state.newMessageText })
        //     state.newMessageText = '';
            return {
                ...state, messages:[{ id: 5, text: state.newMessageText },
                    ...state.messages],
                    newMessageText:''
            }
        }
        case UPDATENEWMESSAGETEXT: {
            // state.newMessageText = action.value;//action does not work when typing
            return {
                ...state, newMessageText:action.value
            }
        }
        default: return state
    }
}