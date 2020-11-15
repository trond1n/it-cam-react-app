import React from "react";
import { connect } from "react-redux";
import {
  followThunk as follow,
  setCurrentPageAC as setCurrentPage,
  // setTotalUsersCountAC as setTotalUsersCount,
  // setUsersAC as setUsers,
  // toggleIsFetchingAC as toggleIsFetching,
  unFollowThunk as unfollow,
  toggleIsFollowingProgressAC as toggleFollowInProgress,
  getUsers,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/preloader";
import { compose } from "redux";
// import { withAuthRedirect } from "../HOC/withAuthRedirect";
import {
  getPageSize,
  getAllUsers,
  getTotalUsersCount,
  getFollowingInProgress,
  getIsFetching,
  getCurrentPage,
} from "../../redux/usersSelectors";
// import { usersAPI } from "../../API/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    this.props.setCurrentPage(pageNumber);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleFollowInProgress={this.props.toggleFollowInProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getAllUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowInProgress,
    getUsers,
  })
)(UsersContainer);
