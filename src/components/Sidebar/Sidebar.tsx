import { FriendsList } from './FriendsList/FriendsList';
import { Navbar } from './Navbar/Navbar';
import s from './Sidebar.module.css';
// import { SubjectsType } from '../../redux/reduxStore';

type PropsType={
    state:any
}
export const Sidebar = (props:PropsType) => {
    return (
            <div className={s.sidebar}>
                <Navbar/>
                <FriendsList state={props.state.friends}/>
            </div>
    )
}