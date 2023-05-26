import { FriendType } from '../../../redux/subjectReducer';
import s from './FriendsList.module.css';

type FriendPropsType = {
    name: string
};
const Friend = ({
    name
}: FriendPropsType) => {
    return (
        <div className={s.sidebar}>
            {name}
        </div>
    )
}


type FriendsListPropsType = {
    friends: FriendType[]
}
export const FriendsList = ({ friends }: FriendsListPropsType) => {
    return (
        <div className={s.sidebar}>
            {friends.map((el: any) => <Friend key={el.id} name={el.name} />)}
        </div>
    )
}