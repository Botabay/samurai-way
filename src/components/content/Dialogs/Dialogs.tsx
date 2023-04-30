import { createRef } from 'react'
import s from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog'
import {Message} from './Message/Message'
import { DialogsPageType } from './../../../state/state'

const NewPost = () => {
    const textareaRef=createRef<HTMLTextAreaElement>();
    return (
        <div>new post
            <div>
                <textarea ref={textareaRef}></textarea>
            </div>
            <button onClick={()=>{console.log(textareaRef.current?.value)}}>send</button>
        </div>
    )
}


type PropsType ={
    state:DialogsPageType
}

export const Dialogs = (props:PropsType) => {
    const dialogsData=props.state.dialogs;
    const messagesData=props.state.messages;
    return (
        <div className={s.dialogs}>
            <div className="dialogItems">
                {dialogsData.map(el => <Dialog key={el.id} id={el.id} name={el.name} />)}
            </div>
            <div className="messageItems">
                {messagesData.map((el, ind) => <Message key={ind} text={el.text} />)}
            </div>
            <NewPost/>
        </div>
    )
}