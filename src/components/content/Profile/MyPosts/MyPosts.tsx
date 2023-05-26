import s from './MyPosts.module.css'
import { Post } from './Post/Post'
import { ProfileDataType } from '../../../../redux/profileReducer'
import { NewPost } from './NewPost/NewPost'

type MyPostsPropsType = {
    postsData: ProfileDataType
    addNewPost: () => void
    updateNewPostText: (v: string) => void
}
export const MyPosts = ({
    postsData,
    addNewPost,
    updateNewPostText
}: MyPostsPropsType) => {
    return (
        <div className={s.posts_block}>
            <h2>My posts</h2>
            <NewPost
                newPostText={postsData.newPostText}
                addNewPost={addNewPost}
                updateNewPostText={updateNewPostText}
            />
            <div>list of posts
                {postsData.posts.map((el: any) => <Post key={el.id} id={el.id} text={el.text} />)}
            </div>
        </div>
    )
}