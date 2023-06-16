// import s from './Post.module.css'
export type PropsType={
    id:number
    text:string
}
export const Post = (props:PropsType) => {
    return (
        <div>
            <h3>id:{props.id} {props.text}</h3>
        </div>
    )
}