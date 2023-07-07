import { connect } from "react-redux";
import { //UserType,
    followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleIsFetchingAC, unfollowAC
} from "../../../redux/usersReducer";
import { AppRootStateType } from "../../../redux/reduxStore";


import { UsersDataType } from "../../../redux/usersReducer"
import React from "react"
// import s from './Users.module.css'
import { Users } from "./Users"
import { Preloader } from "../../../common/preloader/preloader";
import { usersAPI } from "../../../api/api";

type PropsType = {
    users: UsersDataType
    toFollow: any
    toUnfollow: any
    toSetUsers: any
    toSetTotalUsersCount: any
    toSetCurrentPage: any
    toToggleIsFetching: any
}

class UsersContain extends React.Component<PropsType>{
    componentDidMount(): void {
        this.props.toToggleIsFetching(true)
        usersAPI.getUsersData(this.props.users.pageSize, this.props.users.currentPage)
            .then(data => {
                this.props.toToggleIsFetching(false)
                this.props.toSetUsers(data.items);
                this.props.toSetTotalUsersCount(data.totalCount);
            })
    }
    getPageUsers = (ind: number) => {
        this.props.toToggleIsFetching(true)
        usersAPI.getUsersData(this.props.users.pageSize, ind)
            .then(data => {
                this.props.toToggleIsFetching(false)
                this.props.toSetUsers(data.items)
            })
    }
    render() {
        return (
            <>
                {this.props.users.isFetching ? <Preloader /> : ''}
                <Users
                    users={this.props.users}
                    toFollow={this.props.toFollow}
                    toUnfollow={this.props.toUnfollow}
                    // toSetUsers={this.props.toSetUsers}
                    // toSetTotalUsersCount={this.props.toSetTotalUsersCount}
                    toSetCurrentPage={this.props.toSetCurrentPage}
                    getPageUsers={(page: number) => this.getPageUsers(page)}
                />
            </>
        )
    }
}


const mapStateToProps = (state: AppRootStateType) => ({
    users: state.users,
    currentPage: state.users.currentPage,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    isFetching: state.users.isFetching
})
// const mapDispatchToProps = (dispatch: any) => ({
//     toFollow: (id: string) => dispatch(followAC(id)),
//     toUnfollow: (id: string) => dispatch(unfollowAC(id)),
//     toSetUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
//     toSetTotalUsersCount: (n: number) => dispatch(setTotalUsersCountAC(n)),
//     toSetCurrentPage: (n: number) => dispatch(setCurrentPageAC(n)),
//     toToggleIsFetching: (value:boolean)=>dispatch(toggleIsFetchingAC(value))
// })
const mapDispatchToProps = {
    toFollow: followAC,
    toUnfollow: unfollowAC,
    toSetUsers: setUsersAC,
    toSetTotalUsersCount: setTotalUsersCountAC,
    toSetCurrentPage: setCurrentPageAC,
    toToggleIsFetching: toggleIsFetchingAC
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContain)