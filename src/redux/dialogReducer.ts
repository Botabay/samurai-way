const ADDNEWMESSAGE = 'addNewMessage';
const UPDATENEWMESSAGETEXT = 'updateNewMessageText';
type addNewMessageACType = ReturnType<typeof addNewMessageAC>
type updateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>
export const addNewMessageAC = (value:string) => ({ type: ADDNEWMESSAGE , value}) as const;
export const updateNewMessageTextAC =
    (value: string) => ({ type: UPDATENEWMESSAGETEXT, value }) as const;

export type DialogType = {
    id: number,
    name: string
}
export type MessageType = {
    id: number,
    text: string
}


export type DialogsACType = addNewMessageACType | updateNewMessageTextACType

const initS = {
    dialogs: [
        { id: 1, name: 'Lee' },
        { id: 2, name: 'Kim' },
        { id: 3, name: 'John' }
    ] as DialogType[],
    messages: [
        { id: 1, text: 'Hallo everybody' },
        { id: 2, text: 'Hey, zuuuup!' },
        { id: 3, text: 'yo' },
        { id: 4, text: 'Hey guys!' },
    ] as MessageType[],
    newMessageText: 'this is a place for your message'
}

export type DialogDataType = typeof initS

export const dialogReducer = (state: DialogDataType = initS, action: any): DialogDataType => {
    switch (action.type) {
        case ADDNEWMESSAGE: {
            //     state.messages.push({ id: 5, text: state.newMessageText })
            //     state.newMessageText = '';
            return {
                ...state, messages: [{ id: 5, text: action.value },
                ...state.messages],
                newMessageText: ''
            }
        }
        case UPDATENEWMESSAGETEXT: {
            // state.newMessageText = action.value;//action does not work when typing
            return {
                ...state, newMessageText: action.value
            }
        }
        default: return state
    }
}