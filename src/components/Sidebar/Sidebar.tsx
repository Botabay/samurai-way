import { FriendsList } from './FriendsList/FriendsList';
import { Navbar } from './Navbar/Navbar';
import s from './Sidebar.module.css';
import { store } from '../../redux/reduxStore'

export const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <Navbar />
            <FriendsList friends={store.getState().subject.friends} />
        </div>
    )
}