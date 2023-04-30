import s from './Header.module.css';

export const Header = () => {
    return (
        <header>
            <div className={s.header}>
                <img src='./logo192.png' alt=''></img>
            </div>
        </header>
    )
}