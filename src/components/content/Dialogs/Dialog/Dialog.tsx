import { NavLink } from 'react-router-dom'
import s from './Dialog.module.css'

type PropsDialogType = {
    name: string
    id: number
}
export const Dialog = (props: PropsDialogType) => {
    const path = '/dialogs/';
    return (
        <div className="dialog">
            <NavLink to={path + props.id}>{props.name}</NavLink>
        </div>
    )
}
