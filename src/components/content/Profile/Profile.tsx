import s from './Profile.module.css';
import { MessagesType } from '../../../state/state';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import {DataType} from './../../../state/state'

type PropsType = {
    pageName: string
    data:DataType
}

export const Profile = ({ data,pageName }: PropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts data={data}/>
        </div>
    )
}