import s from './MyPosts.module.css'
import { Post } from './Post/Post'

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

export const MyPosts = () => {
    const postsData=[
        {id:1,text:'post1'},
        {id:2,text:'post2'},
        {id:3,text:'post3'}
    ]
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