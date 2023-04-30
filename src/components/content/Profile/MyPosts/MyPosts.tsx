import s from './MyPosts.module.css'
import { Post } from './Post/Post'
import {PostType} from './../../../../state/state'

const NewPost = () => {
    return (
        <div>new post
            <div>
                <textarea></textarea>
            </div>
            <button>send</button>
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
            {postsData.map(el => <Post id={el.id} text={el.text} />)}
            </div>
        </div>
    )
}