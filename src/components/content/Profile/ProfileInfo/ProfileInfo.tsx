import s from './ProfileInfo.module.css'
export const ProfileInfo = ({ profile, ...rest }: any) => {
    // debugger;
    if (!profile) return <></>;
    return (
        <div>
            {/* <h3 className={s.wallpaper}>{pageName}</h3> */}
            <div className={s.about_me}>
                <div className={s.avatar}>
                    {/* <img src='https://avatars.githubusercontent.com/u/51473977?v=4' alt='avatar'></img> */}
                    <img src={profile.photos.large}
                        alt='avatar'></img>
                </div>
                <div className={s.profile_data}>
                    <p>{profile.fullName}</p>
                    <p>date of birth</p>
                    <p>city</p>
                    <p>education</p>
                    <p>web site</p>
                </div>
            </div>
        </div>
    )
}