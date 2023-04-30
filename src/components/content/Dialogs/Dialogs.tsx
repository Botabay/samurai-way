import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

type PropsDialogType = {
    name: string
    id: number
}
const Dialog = (props: PropsDialogType) => {
    const path = '/dialogs/';
    return (
        <div className="dialog">
            <NavLink to={path + props.id}>{props.name}</NavLink>
        </div>
    )
}

type PropsMessageType = {
    text: string
}
const Message = (props: PropsMessageType) => {
    return (
        <div className="dialog">
            {props.text}
        </div>
    )
}

export const Dialogs = () => {
    const dialogsData = [
        { id: 1, name: 'Lee' },
        { id: 2, name: 'Kim' },
        { id: 3, name: 'John' }
    ]
    const messagesData = [
        { text: 'Hi,bro' },
        { text: 'Hi,mate' },
        { text: 'Hi,zup' },
    ]

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