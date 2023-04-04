import s from './Navbar.module.css';
import { Link } from 'react-router-dom'


export const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div>
                <div>
                    <Link to="/">profile</Link>
                </div>
                <div>
                    <Link to="/messages">messages</Link>
                </div>
                <div>
                    <Link to="/news">news</Link>
                </div>
                <div>
                    <Link to="/music">music</Link>
                </div>
            </div>
            <div>
                <Link to="/settings">settings</Link>
            </div>
        </div>
    )
}