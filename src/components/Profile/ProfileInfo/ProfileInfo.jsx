import React from "react";
import Preloader from "../../Common/Preloader/preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  if (!profile) {
    return <Preloader />;
  } else {
    return (
      <div>
        <div className={classes.description__block}>
          <img
            className={classes.main__photo}
            src={
              profile.photos.large != null
                ? profile.photos.large
                : "https://vk.com/images/camera_400.png?ava=1"
            }
            alt="ава пользователя"
          />
          {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
      </div>
    );
  }
};
export default ProfileInfo;
