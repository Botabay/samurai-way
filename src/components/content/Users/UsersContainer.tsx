import { connect } from "react-redux";
import {
    UserType, getUsersDataTC, setCurrentPageAC, followTC, unfollowTC
} from "../../../redux/usersReducer";
import React from "react"
import { Users } from "./Users"
import { Preloader } from "../../../common/preloader/preloader";
import { withRedirectHoc } from "../../../HOCs/withRedirectHoc";

type PropsType = {
    users: UserType[]
    isFollowDisabled: number[]
    isFetching: boolean
    pageSize: number
    currentPage: number
    totalUsersCount: number

    toSetCurrentPage: any
    getUsersDataTC: any
    unfollowTC: any
    followTC: any
}

class UsersContain extends React.Component<PropsType>{
    componentDidMount(): void {
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
                    isFollowDisabled={this.props.isFollowDisabled}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}

                    toSetCurrentPage={this.props.toSetCurrentPage}
                    getPageUsers={(page: number) => this.getPageUsers(page)}
                    followTC={this.props.followTC}
                    unfollowTC={this.props.unfollowTC}
                />
            </>
        )
    }
}

const WithRedirect=withRedirectHoc(UsersContain)

const mapStateToProps = (state: any) => ({
    users: state.users.users,
    currentPage: state.users.currentPage,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    isFetching: state.users.isFetching,
    isFollowDisabled: state.users.isFollowDisabled
})
const mapDispatchToProps = {
    toSetCurrentPage: setCurrentPageAC,
    getUsersDataTC,
    followTC,
    unfollowTC
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(WithRedirect)