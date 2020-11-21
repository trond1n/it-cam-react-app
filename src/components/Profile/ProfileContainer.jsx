import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  setUserThunk as setUserProfile,
  getStatusThunk as getStatus,
  updateStatusThunk as updateStatus,
  savePhotoThunk as savePhoto,
  saveProfileThunk as saveProfile,
} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
// import { withAuthRedirect } from "../HOC/withAuthRedirect";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.setUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }
  render() {
    return (
      <Profile
        isOwner={!this.props.match.params.userId}
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter
  // withAuthRedirect
)(ProfileContainer);
