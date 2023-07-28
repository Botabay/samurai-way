import { connect } from "react-redux";
import {
  UserType,
  getUsersDataTC,
  setCurrentPageAC,
  followTC,
  unfollowTC,
} from "../../../redux/usersReducer";
import React from "react";
import { Users } from "./Users";
import { Preloader } from "../../../common/preloader/preloader";
import { withRedirectHoc } from "../../../HOCs/withRedirectHoc";
import { compose } from "redux";

type PropsType = {
  users: UserType[];
  isFollowDisabled: number[];
  isFetching: boolean;
  pageSize: number;
  currentPage: number;
  totalItemsCount: number;

  toSetCurrentPage: any;
  getUsersDataTC: any;
  followTC: any;
  unfollowTC: any;
};

class UsersContain extends React.Component<PropsType> {
  componentDidMount(): void {
    this.props.getUsersDataTC(this.props.pageSize, this.props.currentPage);
  }
  getPageUsers = (ind: number) => {
    this.props.getUsersDataTC(this.props.pageSize, ind);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : ""}
        <Users
          users={this.props.users}
          isFollowDisabled={this.props.isFollowDisabled}
          totalItemsCount={this.props.totalItemsCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          toSetCurrentPage={this.props.toSetCurrentPage}
          getPageUsers={(page: number) => this.getPageUsers(page)}
          followTC={this.props.followTC}
          unfollowTC={this.props.unfollowTC}
        />
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  users: state.users.users,
  currentPage: state.users.currentPage,
  pageSize: state.users.pageSize,
  totalItemsCount: state.users.totalUsersCount,
  isFetching: state.users.isFetching,
  isFollowDisabled: state.users.isFollowDisabled,
});
const mapDispatchToProps = {
  toSetCurrentPage: setCurrentPageAC,
  getUsersDataTC,
  followTC,
  unfollowTC,
};

export const UsersContainer = compose(
  withRedirectHoc,
  connect(mapStateToProps, mapDispatchToProps)
)(UsersContain);
