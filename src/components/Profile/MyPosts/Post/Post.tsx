import s from './Post.module.css'
export type PropsType={
    text:string
}
export const Post = (props:PropsType) => {
    return (
        <div>
            <h3>{props.text}</h3>
        </div>
    )
}