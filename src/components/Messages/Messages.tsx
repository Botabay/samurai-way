import s from './Messages.module.css';
import {MessagesType} from '../../state/state'

type PropsType={
    pageName:string
    messages:MessagesType
}

export const Messages = ({pageName,messages}:PropsType) => {
    const messagesList=messages.map((el)=><p>{el.text}</p>);
    return (
        <div className={s.messages}>
            <div className={s.wallpaper}>{pageName}</div>
            <div className={s.messages_block}>
                <h2>My messages</h2>
                <div className={s.messages_list}>
                    {messagesList}
                </div>
            </div>
        </div>
    )
}