import { UserType } from "../../../redux/usersReducer"
import { Pagination } from "../../../common/Pagination/Pagination"
import { User } from "./User/User"

type PropsType = {
    users: UserType[]
    isFollowDisabled: number[]
    totalUsersCount: number
    pageSize: number
    currentPage: number

    toSetCurrentPage: any
    getPageUsers: any
    followTC: any
    unfollowTC: any
}

export const Users = ({
    users,
    isFollowDisabled,
    totalUsersCount,
    pageSize,
    currentPage,

    toSetCurrentPage,
    getPageUsers,
    followTC,
    unfollowTC,
}: PropsType) => {

    const toUnfollow = (id: string) => {
        unfollowTC(id)
    }
    const toFollow = (id: string) => {
        followTC(id)
    }
    return (<div>
        <Pagination
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}

            toSetCurrentPage={toSetCurrentPage}
            getPageUsers={getPageUsers}
        />
        <div>
            {
                users.map((el: UserType) => (
                    <User
                        key={el.id}
                        isFollowDisabled={isFollowDisabled}
                        user={el}
                        toUnfollow={toUnfollow}
                        toFollow={toFollow}
                    />
                ))
            }
        </div>
    </div>)
}