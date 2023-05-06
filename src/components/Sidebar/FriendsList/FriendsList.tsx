import { FriendType } from '../../../myRedux/store'
import s from './FriendsList.module.css';

type FriendPropsType=FriendType;
const Friend = (props:FriendPropsType) => {
    return (
            <div className={s.sidebar}>
               {props.name}
            </div>
    )
}


type FriendsListPropsType={
    state:FriendType[]
}
export const FriendsList = (props:FriendsListPropsType) => {
    return (
            <div className={s.sidebar}>
               {props.state.map(el => <Friend key={el.id}id={el.id} name={el.name} />)}
            </div>
    )
}