import s from './Profile.module.css';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { ProfilePageType} from '../../../myRedux/store'


export const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts />
        </div>
    )
}