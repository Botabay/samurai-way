import s from './Messages.module.css';

const Messages = ({pageName,messages}) => {
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

export default Messages;