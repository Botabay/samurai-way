import { store } from '../../../redux/reduxStore';
import {
    updateNewMessageTextActionCreator,
    addNewMessageActionCreator
} from '../../../redux/dialogReducer'
import { Dialogs } from './Dialogs';

type MyPostsContainerPropsType = {}

export const DialogsContainer = ({ }: MyPostsContainerPropsType) => {
    const dialogsData = store.getState().dialogReducer;
    const updateNewMessageText = (v:string) => {
        store.dispatch(updateNewMessageTextActionCreator(v))
    }
    const addNewMessage = () => {
        store.dispatch(addNewMessageActionCreator(v))
    }
    return (
        <Dialogs
            dialogs={dialogsData.dialogs}
            messages={dialogsData.messages}
        addNewMessage={addNewMessage}
        updateNewMessageText={updateNewMessageText}
        />
    )
}