const ADDNEWMESSAGE = 'addNewMessage';
const UPDATENEWMESSAGETEXT = 'updateNewMessageText';

export const addNewMessageActionCreator = () => ({ type: ADDNEWMESSAGE })
export const updateNewMessageTextActionCreator = (value: string) => ({ type: UPDATENEWMESSAGETEXT, value })

export const dialogReducer = (state: any, action: any) => {
    switch (action.type) {
        case ADDNEWMESSAGE: {
            state.messages.push({ id: 4, text: state.newMessageText })
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