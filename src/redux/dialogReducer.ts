const ADD_NEW_MESSAGE = 'DIALOGS/ADD_NEW_MESSAGE';

type AddNewMessageACType = ReturnType<typeof addNewMessageAC>

export const addNewMessageAC = (value: string) => ({
    type: ADD_NEW_MESSAGE,
    value
} as const)

export type DialogType = {
    id: number,
    name: string
}
export type MessageType = {
    id: number,
    text: string
}


export type DialogsACType = AddNewMessageACType

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
    ] as MessageType[]
}

export type DialogDataType = typeof initS

export const dialogReducer = (state: DialogDataType = initS, action: any): DialogDataType => {
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            return {
                ...state, messages: [{ id: 5, text: action.value },
                ...state.messages]
            }
        }
        default: return state
    }
}