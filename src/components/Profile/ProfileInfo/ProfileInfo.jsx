import React from "react";
import Preloader from "../../Common/Preloader/preloader";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  } else {
    return (
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2019/10/29/10/07/man-4586576_960_720.jpg"
          alt="wallpaper"
        />
        <div className={classes.description__block}>ava+desc</div>

        <img src={props.profile.photos.large} alt="" />
      </div>
    );
  }
};
export default ProfileInfo;
