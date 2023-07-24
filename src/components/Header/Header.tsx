import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

export const Header = (props: any) => {
    return (
        <header>
            <div className={s.header}>
                {props.isAuth ?
                <div>
                    {props.login}
                    <button onClick={props.logoutTC}>log out</button>
                </div>:
                 <div>
                    <NavLink to="/login">login</NavLink>
                </div>}
                <img src='./logo192.png' alt=''></img>
            </div>
        </header>
    )
}