import {createRef} from 'react'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'
import {PostType} from './../../../../state/state'

const NewPost = () => {
    const textareaRef=createRef<HTMLTextAreaElement>();
    return (
        <div>new post
            <div>
                <textarea ref={textareaRef}></textarea>
            </div>
            <button onClick={()=>{console.log(textareaRef.current?.value)}}>send</button>
        </div>
    )
}
type PropsType={
    state: PostType[]
}
export const MyPosts = (props:PropsType) => {
    const postsData=props.state;
    return (
        <div className={s.posts_block}>
            <h2>My posts</h2>
            <NewPost />
            <div>list of posts
            {postsData.map(el => <Post key={el.id} id={el.id} text={el.text} />)}
            </div>
        </div>
    )
}