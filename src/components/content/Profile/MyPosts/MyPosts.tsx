import {createRef} from 'react'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'
import {store} from '../../../../redux/reduxStore'
import {updateNewPostTextActionCreator,addNewPostActionCreator} from '../../../../redux/profileReducer'

type NewPostPropsType={
    
}

const NewPost = (props:NewPostPropsType) => {
    const textareaRef=createRef<HTMLTextAreaElement>();
    const onClickHandler=()=>{
        store.dispatch(addNewPostActionCreator());
    }
    return (
        <div>new post
            <div>
                <textarea ref={textareaRef} value={store.getState().profileReducer.newPostText}
                onChange={(e)=>{
                    store.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
                    }}></textarea>
            </div>
            <button onClick={onClickHandler}>send</button>
        </div>
    )
}

type MyPostsPropsType={
}
export const MyPosts = (props:MyPostsPropsType) => {
    const postsData=store.getState().profileReducer.posts;    
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