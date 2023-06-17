import { UserType, UsersDataType } from "../../../redux/usersReducer"
import { User } from "./User/User"

type PropsType = {
    users: UsersDataType
    toFollow: any
    toUnfollow: any
}
export const Users = ({ users, toFollow, toUnfollow }: PropsType) => {
    console.log(toFollow);

    return (<div>{
        users.map((el: UserType) => (
            <div key={el.id}>
                <div className="avatarSection">
                    <p>{el.avatarUrl}</p>
                    <p>{el.follow ?
                        <button onClick={() => toUnfollow(el.id)}>unfollow</button> :
                        <button onClick={() => toFollow(el.id)}>follow</button>}
                    </p>
                </div>
                <div className="infoSection">
                    <span>{el.fullName}</span>
                    <span>{el.status}</span>
                    <span>{el.location.city}</span>
                    <span>{el.location.country}</span>
                </div>
            </div>
        ))
    }
    </div>)
}