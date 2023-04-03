import s from './Settings.module.css';

const Settings = ({pageName}) => {
    return (
        <div className={s.settings}>
            <div className={s.wallpaper}>{pageName}</div>
            <div className={s.settings_block}>
                <h2>My settings</h2>
                <div>list of settings</div>
            </div>
        </div>
    )
}

export default Settings;