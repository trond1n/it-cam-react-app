import React from "react";
import Preloader from "../../Common/Preloader/preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  } else {
    return (
      <div>
        {/* <img
          src="https://cdn.pixabay.com/photo/2019/10/29/10/07/man-4586576_960_720.jpg"
          alt="wallpaper"
        /> */}
        <div className={classes.description__block}>
          <img
            src={
              props.profile.photos.large != null
                ? props.profile.photos.large
                : "https://vk.com/images/camera_400.png?ava=1"
            }
            alt="ава пользователя"
          />
          <ProfileStatusWithHooks
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>
      </div>
    );
  }
};
export default ProfileInfo;
