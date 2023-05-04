import { createRef } from 'react'
import s from './Dialogs.module.css'
import { Dialog } from './Dialog/Dialog'
import { Message } from './Message/Message'
import { DialogsPageType } from './../../../state/state'

type NewMessagePropsType={
    newMessageText:string
    addNewMessage:()=>void
    updateNewMessageText:(value:string)=>void
}
const NewMessage = (props:NewMessagePropsType) => {
    const textareaRef = createRef<HTMLTextAreaElement>();
    return (
        <div>NEW MESSAGE
            <div>
                <textarea ref={textareaRef} value={props.newMessageText}
                    onChange={(e) => {
                        props.updateNewMessageText(e.currentTarget.value)
                }}></textarea>
            </div>
            <button onClick={() => {
                props.addNewMessage();
            }}>send</button>
        </div>
    )
}


type DialogsPropsType = {
    state: DialogsPageType
    addNewMessage:()=>void
    updateNewMessageText:(value:string)=>void
}

export const Dialogs = (props: DialogsPropsType) => {
    const dialogsData = props.state.dialogs;
    const messagesData = props.state.messages;
    return (
        <div className={s.dialogs}>
            <div className="dialogItems">
                {dialogsData.map(el => <Dialog key={el.id} id={el.id} name={el.name} />)}
            </div>
            <div className="messageItems">
                {messagesData.map((el, ind) => <Message key={ind} text={el.text} />)}
            </div>
            <NewMessage newMessageText={props.state.newMessageText}
                addNewMessage={props.addNewMessage} updateNewMessageText={props.updateNewMessageText}
            />
        </div>
    )
}