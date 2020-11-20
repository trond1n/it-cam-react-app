import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <main>
      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
      />

      <MyPostsContainer />
    </main>
  );
};

export default Profile;
