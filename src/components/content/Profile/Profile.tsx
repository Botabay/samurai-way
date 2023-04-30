import s from './Profile.module.css';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import {MessageType, ProfilePageType} from './../../../state/state'

type PropsType = {
    pageName: string
    state:ProfilePageType
    callback:(obj:MessageType)=>void
}

export const Profile = ({ state,pageName,callback }: PropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts state={state.posts} callback={callback}/>
        </div>
    )
}