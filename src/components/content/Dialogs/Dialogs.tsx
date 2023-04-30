import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog'
import {Message} from './Message/Message'
import { DialogsPageType } from './../../../state/state'

type PropsType ={
    state:DialogsPageType
}

export const Dialogs = (props:PropsType) => {
    const dialogsData=props.state.dialogs;
    const messagesData=props.state.messages;
    return (
        <div className={s.dialogs}>
            <div className="dialogItems">
                {dialogsData.map(el => <Dialog id={el.id} name={el.name} />)}
            </div>
            <div className="messageItems">
                {messagesData.map(el => <Message text={el.text} />)}
            </div>
        </div>
    )
}