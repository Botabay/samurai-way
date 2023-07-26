import { NavLink } from "react-router-dom"
import avatar from '../../../../assets/img/avatar.svg'
import s2 from '../../../Sidebar/Navbar/Navbar.module.css'

export const User = ({
    isFollowDisabled,
    user,
    toUnfollow,
    toFollow
}:any) => {
    return (
        <div>
            <div className="avatarSection">
                <p>
                    <NavLink
                        className={({ isActive, isPending }) => isPending ? "pending" : isActive ? s2.active : ""}
                        to={`/profile/${user.id}`}
                    >
                        <img
                            src={!!user.avatarUrl ? user.avatarUrl : avatar}
                            alt="avatar"
                        />
                    </NavLink>
                </p>
                <p>{user.followed ?
                    <button disabled={isFollowDisabled.includes(+user.id)}
                        onClick={() => toUnfollow(user.id)}
                    >unfollow</button> :
                    <button disabled={isFollowDisabled.includes(+user.id)}
                        onClick={() => toFollow(user.id)}
                    >follow</button>}
                </p>
            </div>
            <div className="infoSection">
                <span>{user.name}</span>
            </div>
        </div>
    )
}