import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog'
import {Message} from './Message/Message'
import { DataType } from './../../../state/state'

type PropsType ={
    data:DataType
}

export const Dialogs = (props:PropsType) => {
    const dialogsData=props.data.dialogsData;
    const messagesData=props.data.messagesData;
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