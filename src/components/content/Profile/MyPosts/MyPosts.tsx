import s from './MyPosts.module.css'
import {Post} from './Post/Post'

export const MyPosts=()=>{
    return (
        <div className={s.posts_block}>
                <h2>My posts</h2>
                <div>new post
                    <div>
                        <textarea></textarea>
                    </div>
                    <button>send</button>
                </div>
                <div>list of posts
                    <Post text={'post1'}/>
                    <Post text={'post2'}/>
                    <Post text={'post3'}/>
                </div>
            </div>
    )
}