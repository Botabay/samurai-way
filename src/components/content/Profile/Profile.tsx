import s from './Profile.module.css';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { ProfilePageType} from './../../../state/state'


export const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts />
        </div>
    )
}