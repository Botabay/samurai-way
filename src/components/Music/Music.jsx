import s from './Music.module.css';

const Music = ({pageName}) => {
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

export default Music;