import { store } from '../../../redux/reduxStore';
import { addNewMessageAC, updateNewMessageTextAC } from '../../../redux/dialogReducer'
import { Dialogs } from './Dialogs';
import { TContext } from '../../../contextTemp';

type MyPostsContainerPropsType = {}

export const DialogsContainer = ({ }: MyPostsContainerPropsType) => {
    // const dialogsData = store.getState().dialogs;
    const updateNewMessageText = (v: string) => {
        store.dispatch(updateNewMessageTextAC(v))
    }
    const addNewMessage = () => {
        store.dispatch(addNewMessageAC())
    }
    return (
        <TContext.Consumer>
            {(store) => {
                return <Dialogs
                    dialogs={store.getState().dialogs.dialogs}
                    messages={store.getState().dialogs.messages}
                    newMessageText={store.getState().dialogs.newMessageText}
                    addNewMessage={addNewMessage}
                    updateNewMessageText={updateNewMessageText}
                />
                }
            }
        </TContext.Consumer>
    )
}