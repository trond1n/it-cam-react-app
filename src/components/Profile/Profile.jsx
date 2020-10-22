import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
const Profile = () => {
  return (
    <main>
      <img
        src="https://cdn.pixabay.com/photo/2019/10/29/10/07/man-4586576_960_720.jpg"
        alt="wallpaper"
      />
      <div>ava+desc</div>
      <MyPosts />
    </main>
  );
};
export default Profile;
