import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <img
        src="https://cdn.pixabay.com/photo/2019/10/29/10/07/man-4586576_960_720.jpg"
        alt="wallpaper"
      />
      <div className={classes.description__block}>ava+desc</div>
    </div>
  );
};
export default ProfileInfo;
