import { store } from '../../../redux/reduxStore';
import { addNewMessageAC, updateNewMessageTextAC } from '../../../redux/dialogReducer'
import { Dialogs } from './Dialogs';

type MyPostsContainerPropsType = {}

export const DialogsContainer = ({ }: MyPostsContainerPropsType) => {
    const dialogsData = store.getState().dialogReducer;
    const updateNewMessageText = (v: string) => {
        store.dispatch(updateNewMessageTextAC(v))
    }
    const addNewMessage = () => {
        store.dispatch(addNewMessageAC())
    }
    return (
        <Dialogs
            dialogs={dialogsData.dialogs}
            messages={dialogsData.messages}
            newMessageText={dialogsData.newMessageText}
            addNewMessage={addNewMessage}
            updateNewMessageText={updateNewMessageText}
        />
    )
}