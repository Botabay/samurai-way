import s from './Music.module.css';
import { MessagesType } from '../../state/state';

type PropsType={
    pageName:string
    messages?:MessagesType
}

export const Music = ({pageName}:PropsType) => {
    return (
        <div className={s.music}>
            <div className={s.wallpaper}>{pageName}</div>
            <div className={s.music_block}>
                <h2>My messages</h2>
                <div>list of messages</div>
            </div>
        </div>
    )
}