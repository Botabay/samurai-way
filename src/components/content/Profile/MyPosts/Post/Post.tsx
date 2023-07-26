// import s from './Post.module.css'
export type PropsType = {
    id: number
    text: string
}
export const Post = ({ id, text, ...props }: PropsType) => {
    return (
        <div>
            <h3>id:{id} {text}</h3>
        </div>
    )
}