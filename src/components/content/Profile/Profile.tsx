import s from './Profile.module.css';
import { MessagesType } from '../../../state/state';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

type PropsType = {
    pageName: string
    messages?: MessagesType
}

export const Profile = ({ pageName }: PropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts />
        </div>
    )
}