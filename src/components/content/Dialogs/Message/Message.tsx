import s from './Message.module.css'

type PropsMessageType = {
    text: string
}
export const Message = (props: PropsMessageType) => {
    return (
        <div className="dialog">
            {props.text}
        </div>
    )
}
