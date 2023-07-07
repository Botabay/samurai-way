import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

export const Header = (props: any) => {
    return (
        <header>
            <div className={s.header}>
                {!props.auth.isAuth && <div>
                    <NavLink to="/login">login</NavLink>
                </div>}
                <img src='./logo192.png' alt=''></img>
            </div>
        </header>
    )
}