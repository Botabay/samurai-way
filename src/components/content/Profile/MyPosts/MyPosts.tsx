import {createRef} from 'react'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'
import {PostType} from './../../../../state/state'

type NewPostPropsType={
    addNewPost:()=>void
    newPostText:string
    addNewPostText:(value:string)=>void
}

const NewPost = (props:NewPostPropsType) => {
    const textareaRef=createRef<HTMLTextAreaElement>();
    const onClickHandler=()=>{
        props.addNewPost();
    }
    return (
        <div>new post
            <div>
                <textarea ref={textareaRef} value={props.newPostText}
                onChange={(e)=>{
                    props.addNewPostText(e.currentTarget.value)
                    }}></textarea>
            </div>
            <button onClick={onClickHandler}>send</button>
        </div>
    )
}

type MyPostsPropsType={
    state: PostType[]
    addNewPost:()=>void
    newPostText:string
    addNewPostText:(value:string)=>void
}
export const MyPosts = (props:MyPostsPropsType) => {
    const postsData=props.state;    
    return (
        <div className={s.posts_block}>
            <h2>My posts</h2>
            <NewPost addNewPost={props.addNewPost} newPostText={props.newPostText} addNewPostText={props.addNewPostText}/>
            <div>list of posts
            {postsData.map(el => <Post key={el.id} id={el.id} text={el.text} />)}
            </div>
        </div>
    )
}