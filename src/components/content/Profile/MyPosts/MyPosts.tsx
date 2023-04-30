import {createRef} from 'react'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'
import {MessageType, PostType} from './../../../../state/state'

type NewPostPropsType={
    callback:(obj:MessageType)=>void
}

const NewPost = (props:NewPostPropsType) => {
    const textareaRef=createRef<HTMLTextAreaElement>();
    return (
        <div>new post
            <div>
                <textarea ref={textareaRef}></textarea>
            </div>
            <button onClick={()=>{props.callback({id:4,text:''+textareaRef.current?.value}); }}>send</button>
        </div>
    )
}

type MyPostsPropsType={
    state: PostType[]
    callback:(obj:MessageType)=>void
}
export const MyPosts = (props:MyPostsPropsType) => {
    const postsData=props.state;    
    return (
        <div className={s.posts_block}>
            <h2>My posts</h2>
            <NewPost callback={props.callback}/>
            <div>list of posts
            {postsData.map(el => <Post key={el.id} id={el.id} text={el.text} />)}
            </div>
        </div>
    )
}