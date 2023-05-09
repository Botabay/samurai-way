// import { FriendType } from '../../../redux/reduxStore'
import s from './FriendsList.module.css';

// type FriendPropsType=FriendType;
const Friend = (props:any
    //FriendPropsType
    ) => {
    return (
            <div className={s.sidebar}>
               {props.name}
            </div>
    )
}


type FriendsListPropsType={
     state:any//FriendType[]
}
export const FriendsList = (props:FriendsListPropsType) => {
    return (
            <div className={s.sidebar}>
               {props.state.map((el:any) => <Friend key={el.id}id={el.id} name={el.name} />)}
            </div>
    )
}