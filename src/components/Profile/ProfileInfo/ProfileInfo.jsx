import React, { useState } from "react";
import Preloader from "../../Common/Preloader/preloader";
import ProfileDataReduxForm from "./ProfileDataForm";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  let [editMode, setEditMode] = useState(false);
  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

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
          {editMode ? (
            <ProfileDataReduxForm initialValues={profile} onSubmit={onSubmit} />
          ) : (
            <ProfileData
              goToEditMode={() => {
                setEditMode(true);
              }}
              profile={profile}
              isOwner={isOwner}
            />
          )}

          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
      </div>
    );
  }
};
const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>edit</button>
        </div>
      )}
      <div>
        <b>Full Name: </b> {profile.fullName}
      </div>
      <div>
        <b>Loking for a job: </b> {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My Professional Skills: </b> {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me: </b> {profile.aboutMe}
      </div>
      <div>
        <b>Contacts: </b>{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={classes.contacts}>
      <b>{contactTitle}: </b> {contactValue}
    </div>
  );
};
export default ProfileInfo;
