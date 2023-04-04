import s from './Profile.module.css';
import { MessagesType } from '../../state/state';

type PropsType={
    pageName:string
    messages:MessagesType
}

const Profile = ({pageName}:PropsType) => {
    return (
        <div className={s.content}>
            <div className={s.wallpaper}>{pageName}</div>
            <div className={s.about_me}>
                <div className={s.avatar}>
                    <img src='https://avatars.githubusercontent.com/u/51473977?v=4' alt='avatar'></img>
                </div>
                <div className={s.profile_data}>
                    <p>name</p>
                    <p>date of birth</p>
                    <p>city</p>
                    <p>education</p>
                    <p>web site</p>
                </div>
            </div>
            <div className={s.posts_block}>
                <h2>My posts</h2>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <button>send</button>
                </div>
                <div>list of posts</div>
            </div>
        </div>
    )
}

export default Profile;