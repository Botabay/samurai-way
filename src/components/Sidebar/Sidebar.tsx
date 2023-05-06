import { FriendsList } from './FriendsList/FriendsList';
import { Navbar } from './Navbar/Navbar';
import s from './Sidebar.module.css';
import { SubjectsType } from '../../myRedux/store';

type PropsType={
    state:SubjectsType
}
export const Sidebar = (props:PropsType) => {
    return (
            <div className={s.sidebar}>
                <Navbar/>
                <FriendsList state={props.state.friends}/>
            </div>
    )
}