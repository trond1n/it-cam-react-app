import React from "react";
import Preloader from "../../Common/Preloader/preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  } else {
    return (
      <div>
        <div className={classes.description__block}>
          <img
            src={
              profile.photos.large != null
                ? profile.photos.large
                : "https://vk.com/images/camera_400.png?ava=1"
            }
            alt="ава пользователя"
          />
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
      </div>
    );
  }
};
export default ProfileInfo;
