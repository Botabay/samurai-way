import { createRef } from 'react'
import s from './Dialogs.module.css'
import { Dialog } from './Dialog/Dialog'
import { Message } from './Message/Message'
import { store,updateNewMessageTextActionCreator,addNewMessageActionCreator } from './../../../state/state'

type NewMessagePropsType={
    
}
const NewMessage = (props:NewMessagePropsType) => {
    const textareaRef = createRef<HTMLTextAreaElement>();
    return (
        <div>NEW MESSAGE
            <div>
                <textarea ref={textareaRef} value={store.getState().dialogsPage.newMessageText}
                    onChange={(e) => {
                        store.dispatch(updateNewMessageTextActionCreator(e.currentTarget.value))
                }}></textarea>
            </div>
            <button onClick={() => {
                store.dispatch(addNewMessageActionCreator());
            }}>send</button>
        </div>
    )
}


type DialogsPropsType = {
}

export const Dialogs = (props: DialogsPropsType) => {
    const dialogsData = store.getState().dialogsPage.dialogs;
    const messagesData = store.getState().dialogsPage.messages;
    return (
        <div className={s.dialogs}>
            <div className="dialogItems">
                {dialogsData.map(el => <Dialog key={el.id} id={el.id} name={el.name} />)}
            </div>
            <div className="messageItems">
                {messagesData.map((el, ind) => <Message key={ind} text={el.text} />)}
            </div>
            <NewMessage />
        </div>
    )
}