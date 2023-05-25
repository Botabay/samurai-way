import {createRef} from 'react'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'
import { addNewPostActionCreator } from '../../../../redux/profileReducer'
import { updateNewPostTextActionCreator } from '../../../../redux/profileReducer'

type NewPostPropsType={
    postsData:any///????type redux
}

const NewPost = ({postsData}:NewPostPropsType) => {
    const textareaRef=createRef<HTMLTextAreaElement>();
    const onClickHandler=()=>{
        postsData.dispatch(addNewPostActionCreator());
    }
    return (
        <div>new post
            <div>
                <textarea ref={textareaRef} value={postsData.getState().profileReducer.newPostText}
                onChange={(e)=>{
                    postsData.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
                    }}></textarea>
            </div>
            <button onClick={onClickHandler}>send</button>
        </div>
    )
}

type MyPostsPropsType={
    postsData:any
}
export const MyPosts = (props:MyPostsPropsType) => {
    const postsData=props.postsData.getState().profileReducer.posts; ////   
    return (
        <div className={s.posts_block}>
            <h2>My posts</h2>
            <NewPost postsData={postsData}/>
            <div>list of posts
            {postsData.map((el:any) => <Post key={el.id} id={el.id} text={el.text} />)}
            </div>
        </div>
    )
}