import s from './Profile.module.css';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { ProfilePageType} from './../../../state/state'

type PropsType = {
    state:ProfilePageType
    addNewPost:()=>void
    updateNewPostText:(value:string)=>void
}

export const Profile = ({ state,addNewPost , updateNewPostText}: PropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts state={state.posts} addNewPost={addNewPost} newPostText={state.newPostText}
                updateNewPostText={updateNewPostText}    
            />
        </div>
    )
}