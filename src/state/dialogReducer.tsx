const ADDNEWMESSAGE = 'addNewMessage';
export const addNewMessageActionCreator = () => ({ type: ADDNEWMESSAGE })
const UPDATENEWMESSAGETEXT = 'updateNewMessageText';
export const updateNewMessageTextActionCreator = (value: string) => ({ type: UPDATENEWMESSAGETEXT, value })

const dialogReducer = (state: any, action: any) => {
    switch (action.type) {
        case ADDNEWMESSAGE: {
            state.dialogsPage.messages.push({ id: 4, text: state.dialogsPage.newMessageText })
            state.dialogsPage.newMessageText = ''
            //   callSubscriber(state)
            break
        }
        case UPDATENEWMESSAGETEXT: {
            state.dialogsPage.newMessageText = action.value;
            //   callSubscriber(state)
            break
        }
        default: return state
    }
}