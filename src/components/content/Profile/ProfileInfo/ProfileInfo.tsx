import s from './ProfileInfo.module.css'
export const ProfileInfo = () => {
    return (
        <div>
            {/* <h3 className={s.wallpaper}>{pageName}</h3> */}
            <div className={s.about_me}>
                <div className={s.avatar}>
                    <img src='https://avatars.githubusercontent.com/u/51473977?v=4' alt='avatar'></img>
                </div>
                <div className={s.profile_data}>
                    <p>name</p>
                    <p>date of birth</p>
                    <p>city</p>
                    <p>education</p>
                    <p>web site</p>
                </div>
            </div>
        </div>
    )
}