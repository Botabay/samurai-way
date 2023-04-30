import s from './Profile.module.css';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from './../../../state/state'

type PropsType = {
    pageName: string
    state:ProfilePageType
}

export const Profile = ({ state,pageName }: PropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts state={state.posts}/>
        </div>
    )
}