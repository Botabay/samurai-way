// import s from './Message.module.css'

type PropsMessageType = {
    text: string
}
export const Message = ({
    text
}: PropsMessageType) => {
    return (
        <div className="dialog">
            {text}
        </div>
    )
}
