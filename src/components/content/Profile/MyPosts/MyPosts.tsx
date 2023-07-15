import s from './MyPosts.module.css'
import { Post } from './Post/Post'
import { ProfileDataType } from '../../../../redux/profileReducer'
import { NewItem } from '../../NewItem/NewItem'

type MyPostsPropsType = {
    postsData: ProfileDataType
    addNewPost: (value:string) => void
}
export const MyPosts = ({
    postsData,
    addNewPost
}: MyPostsPropsType) => {
    return (
        <div className={s.posts_block}>
            <h2>My posts</h2>
            <NewItem
                title={'new post'}
                addNewItem={addNewPost}
            />
            <div>list of posts
                {postsData.posts.map((el: any) => <Post key={el.id} id={el.id} text={el.text} />)}
            </div>
        </div>
    )
}