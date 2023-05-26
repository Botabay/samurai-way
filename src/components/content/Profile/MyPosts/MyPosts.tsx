import { createRef } from 'react'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'
import { ProfileDataType } from '../../../../redux/profileReducer'

type NewPostPropsType = {
    newPostText: string
    addNewPostActionCreatorTempCallback: () => void
    updateNewPostTextActionCreatorTempCallback:(v:string)=>void
}

const NewPost = ({
    newPostText,
    addNewPostActionCreatorTempCallback,
    updateNewPostTextActionCreatorTempCallback
}: NewPostPropsType) => {
    const textareaRef = createRef<HTMLTextAreaElement>();
    const onClickHandler = () => {
        addNewPostActionCreatorTempCallback()
    }
    return (
        <div>new post
            <div>
                <textarea ref={textareaRef} value={newPostText}
                    onChange={(e) => {
                        updateNewPostTextActionCreatorTempCallback(e.currentTarget.value)
                    }}></textarea>
            </div>
            <button onClick={onClickHandler}>send</button>
        </div>
    )
}

type MyPostsPropsType = {
    postsData: ProfileDataType
    addNewPostActionCreatorTempCallback: () => void
    updateNewPostTextActionCreatorTempCallback:(v:string)=>void
}
export const MyPosts = ({
    postsData,
    addNewPostActionCreatorTempCallback,
    updateNewPostTextActionCreatorTempCallback
}: MyPostsPropsType) => {
    return (
        <div className={s.posts_block}>
            <h2>My posts</h2>
            <NewPost 
            newPostText={postsData.newPostText} 
            addNewPostActionCreatorTempCallback={addNewPostActionCreatorTempCallback} 
            updateNewPostTextActionCreatorTempCallback={updateNewPostTextActionCreatorTempCallback}
            />
            <div>list of posts
                {postsData.posts.map((el: any) => <Post key={el.id} id={el.id} text={el.text} />)}
            </div>
        </div>
    )
}