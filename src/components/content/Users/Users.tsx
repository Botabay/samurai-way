import { UserType } from "../../../redux/usersReducer"
import s from './Users.module.css'
import s2 from '../../Sidebar/Navbar/Navbar.module.css'
import avatar from '../../../assets/img/avatar.svg'
import { NavLink } from "react-router-dom"
import { followAPI } from "../../../api/api"

type PropsType = {
    users: UserType[]
    isFollowDisabled: number[]
    totalUsersCount: number
    pageSize: number
    currentPage: number

    toFollow: any
    toUnfollow: any
    toSetCurrentPage: any
    getPageUsers: any
    toggleIsFollowDisabled: any
}

export const Users = (props: PropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const arr = []
    for (let i = 1; i < pagesCount; i++) arr.push(i);
    const onClickHandler = (el: number) => {
        props.toSetCurrentPage(el)
        props.getPageUsers(el);
    }
    const toUnfollow = (id: string) => {
        props.toggleIsFollowDisabled(true,id)
        followAPI.deleteFollowId(+id)
            .then(data => {
                props.toggleIsFollowDisabled(false,id)
                if (data.resultCode === 0) {
                    props.toUnfollow(id)
                }
            })
    }
    const toFollow = (id: string) => {
        props.toggleIsFollowDisabled(true,id)
        followAPI.postFollowId(+id)
            .then(data => {
                props.toggleIsFollowDisabled(false,id)
                if (data.resultCode === 0) {
                    props.toFollow(id)
                }
            })
    }
    return (<div>
        <div>
            {arr.map((el: number) => <span
                onClick={() => onClickHandler(el)}
                className={el === props.currentPage ? s.selected : ''}
            >
                {el}
            </span>)}
        </div>
        {
            props.users.map((el: UserType) => (
                <div key={el.id}>
                    <div className="avatarSection">
                        <p>
                            <NavLink
                                className={({ isActive, isPending }) => isPending ? "pending" : isActive ? s2.active : ""}
                                to={`/profile/${el.id}`}
                            >
                                <img
                                    src={!!el.avatarUrl ? el.avatarUrl : avatar}
                                    alt="avatar"
                                />
                            </NavLink>
                        </p>
                        <p>{el.followed ?
                            <button disabled={props.isFollowDisabled.includes(+el.id)}
                                onClick={() => toUnfollow(el.id)}
                            >unfollow</button> :
                            <button disabled={props.isFollowDisabled.includes(+el.id)}
                                onClick={() => toFollow(el.id)}
                            >follow</button>}
                        </p>
                    </div>
                    <div className="infoSection">
                        <span>{el.name}</span>
                    </div>
                </div>
            ))
        }
    </div>)
}