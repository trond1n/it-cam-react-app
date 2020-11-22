import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./users.module.css";

const User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={
                user.photos.small != null
                  ? user.photos.small
                  : "https://vk.com/images/camera_400.png?ava=1"
              }
              alt="фото пользователя"
              className={styles.user__photo}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <div>{user.name}</div>
        <div>{user.status}</div>
      </span>
      <span>
        <div>{"Страна"}</div>
        <div>{"Город"}</div>
      </span>
    </div>
  );
};

export default User;
