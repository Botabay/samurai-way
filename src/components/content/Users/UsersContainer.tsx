import { connect } from "react-redux";
import {
    UserType, followAC, setCurrentPageAC,
    setTotalUsersCountAC, setUsersAC, toggleIsFetchingAC,
    toggleIsFollowDisabledAC, unfollowAC
} from "../../../redux/usersReducer";
import { AppRootStateType } from "../../../redux/reduxStore";
import React from "react"
// import s from './Users.module.css'
import { Users } from "./Users"
import { Preloader } from "../../../common/preloader/preloader";
import { usersAPI } from "../../../api/api";

type PropsType = {
    users: UserType[]
    isFollowDisabled: number[]
    isFetching: boolean
    pageSize: number
    currentPage: number
    totalUsersCount: number

    toFollow: any
    toUnfollow: any
    toSetUsers: any
    toSetTotalUsersCount: any
    toSetCurrentPage: any
    toToggleIsFetching: any
    toggleIsFollowDisabled: any

}

class UsersContain extends React.Component<PropsType>{
    componentDidMount(): void {
        this.props.toToggleIsFetching(true)
        usersAPI.getUsersData(this.props.pageSize, this.props.currentPage)
            .then(data => {
                this.props.toToggleIsFetching(false)
                this.props.toSetUsers(data.items);
                this.props.toSetTotalUsersCount(data.totalCount);
            })
    }
    getPageUsers = (ind: number) => {
        this.props.toToggleIsFetching(true)
        usersAPI.getUsersData(this.props.pageSize, ind)
            .then(data => {
                this.props.toToggleIsFetching(false)
                this.props.toSetUsers(data.items)
            })
    }
    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : ''}
                <Users
                    users={this.props.users}
                    toggleIsFollowDisabled={this.props.toggleIsFollowDisabled}
                    isFollowDisabled={this.props.isFollowDisabled}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}

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


const mapStateToProps = (state: any) => ({
    users: state.users.users,
    currentPage: state.users.currentPage,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    isFetching: state.users.isFetching,
    isFollowDisabled: state.users.isFollowDisabled
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
    toToggleIsFetching: toggleIsFetchingAC,
    toggleIsFollowDisabled: toggleIsFollowDisabledAC
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContain)