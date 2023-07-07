import { connect } from "react-redux";
import {
    UserType, getUsersDataTC, setCurrentPageAC,
    // setTotalUsersCountAC, setUsersAC, toggleIsFetchingAC, toggleIsFollowDisabledAC, unfollowAC, followAC,
    followTC, unfollowTC
} from "../../../redux/usersReducer";
// import { AppRootStateType } from "../../../redux/reduxStore";
import React from "react"
// import s from './Users.module.css'
import { Users } from "./Users"
import { Preloader } from "../../../common/preloader/preloader";
// import { usersAPI } from "../../../api/api";

type PropsType = {
    users: UserType[]
    isFollowDisabled: number[]
    isFetching: boolean
    pageSize: number
    currentPage: number
    totalUsersCount: number

    // toFollow: any
    // toUnfollow: any
    // toSetUsers: any
    // toSetTotalUsersCount: any
    toSetCurrentPage: any
    // toToggleIsFetching: any
    // toggleIsFollowDisabled: any
    getUsersDataTC: any
    unfollowTC:any
    followTC:any
}

class UsersContain extends React.Component<PropsType>{
    componentDidMount(): void {
        // this.props.toToggleIsFetching(true)
        // usersAPI.getUsersData(this.props.pageSize, this.props.currentPage)
        //     .then(data => {
        //         this.props.toToggleIsFetching(false)
        //         this.props.toSetUsers(data.items);
        //         this.props.toSetTotalUsersCount(data.totalCount);
        //     })
        this.props.getUsersDataTC(this.props.pageSize, this.props.currentPage)
    }
    getPageUsers = (ind: number) => {
        this.props.getUsersDataTC(this.props.pageSize, ind)
    }
    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : ''}
                <Users
                    users={this.props.users}
                    // toggleIsFollowDisabled={this.props.toggleIsFollowDisabled}
                    isFollowDisabled={this.props.isFollowDisabled}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}

                    // toFollow={this.props.toFollow}
                    // toUnfollow={this.props.toUnfollow}
                    // toSetUsers={this.props.toSetUsers}
                    // toSetTotalUsersCount={this.props.toSetTotalUsersCount}
                    toSetCurrentPage={this.props.toSetCurrentPage}
                    getPageUsers={(page: number) => this.getPageUsers(page)}
                    followTC={this.props.followTC}
                    unfollowTC={this.props.unfollowTC}
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
const mapDispatchToProps = {
    // toFollow: followAC,
    // toUnfollow: unfollowAC,
    // toSetUsers: setUsersAC,
    // toSetTotalUsersCount: setTotalUsersCountAC,
    toSetCurrentPage: setCurrentPageAC,
    // toToggleIsFetching: toggleIsFetchingAC,
    // toggleIsFollowDisabled: toggleIsFollowDisabledAC,
    getUsersDataTC,
    followTC,
    unfollowTC
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContain)