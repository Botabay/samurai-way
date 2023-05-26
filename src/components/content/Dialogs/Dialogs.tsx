import { createRef } from 'react'
import s from './Dialogs.module.css'
import { Dialog } from './Dialog/Dialog'
import { Message } from './Message/Message'
import { MessageType, DialogType, } from '../../../redux/dialogReducer'

type NewMessagePropsType = {

}
const NewMessage = ({

}: NewMessagePropsType) => {
    const textareaRef = createRef<HTMLTextAreaElement>();
    return (
        <div>NEW MESSAGE
            <div>
                <textarea ref={textareaRef} value={store.getState().dialogReducer.newMessageText}
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
    dialogs: DialogType[]
    messages: MessageType[]
    updateNewMessageText:(v:string)=>void
    addNewMessage:()=>void
}

export const Dialogs = ({
    dialogs,
    messages,
    updateNewMessageText,
    addNewMessage
}: DialogsPropsType) => {

    return (
        <div className={s.dialogs}>
            <div className="dialogItems">
                {dialogs.map((el: any) => <Dialog key={el.id} id={el.id} name={el.name} />)}
            </div>
            <div className="messageItems">
                {messages.map((el: any, ind: number) => <Message key={ind} text={el.text} />)}
            </div>
            <NewMessage />
        </div>
    )
}