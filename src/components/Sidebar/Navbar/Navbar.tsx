import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <div className={s.navbar}>
                <div>
                    <div>
                        <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? s.active : ""} to="/profile">profile</NavLink>
                    </div>
                    <div>
                        <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? s.active : ""} to="/dialogs">messages</NavLink>
                    </div>
                    <div>
                        <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? s.active : ""} to="/news">news</NavLink>
                    </div>
                    <div>
                        <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? s.active : ""} to="/music">music</NavLink>
                    </div>
                    <div>
                        <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? s.active : ""} to="/users">users</NavLink>
                    </div>
                </div>
                <div>
                    <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? s.active : ""} to="/settings">settings</NavLink>
                </div>
            </div>
        </nav>
    )
}