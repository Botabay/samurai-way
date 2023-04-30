import s from './Settings.module.css';
// import { MessagesType } from '../../state/state';

type PropsType={
    pageName:string
    // messages?:MessagesType
}

export const Settings = ({pageName}:PropsType) => {
    return (
        <div className={s.settings}>
            <div className={s.wallpaper}>{pageName}</div>
            <div className={s.settings_block}>
                <h2>My settings</h2>
                <div>list of settings</div>
            </div>
        </div>
    )
}