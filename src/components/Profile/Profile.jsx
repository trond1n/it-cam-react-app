import React from "react";
import MyPostsContaiter from "./MyPosts/MyPostsContaiter";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <main>
      <ProfileInfo />
      <MyPostsContaiter
        store={props.store}
      />
    </main>
  );
};
export default Profile;
