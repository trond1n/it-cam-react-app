import React from "react";
import styles from "./users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://sun3-13.userapi.com/impf/c855536/v855536760/a12f6/z0432RfuLxE.jpg?size=100x0&quality=88&crop=125,122,479,479&sign=fee2837fa1f9c5569b91cee34e4bbf7f&ava=1",
        followed: true,
        fullName: "Dmitry K.",
        status: "Have a good day",
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: 2,
        photoUrl:
          "https://sun3-12.userapi.com/impf/c845324/v845324527/28081/SaBJZMPYsfg.jpg?size=100x0&quality=88&crop=88,0,379,379&sign=4c0ce4df0a26430c48760c77b4cd3141&ava=1",
        followed: false,
        fullName: "Ura A.",
        status: "Nice day",
        location: { city: "Astana", country: "Kazakhstan" },
      },
      {
        id: 3,
        photoUrl:
          "https://sun3-12.userapi.com/impg/c857632/v857632427/200918/l00ii3Ty4AU.jpg?size=100x0&quality=88&crop=0,174,1763,1763&sign=1004370ca497ac79f32f7d6b2bdcc32a&ava=1",
        followed: false,
        fullName: "Anna A",
        status: "Hello, world",
        location: { city: "Kiyv", country: "Ukraine" },
      },
      {
        id: 4,
        photoUrl:
          "https://sun3-13.userapi.com/impg/8b8rohCw9ZBsacKrv4tKl-T4CV7JCkyFsOm16w/7ONzLA5_KQM.jpg?size=100x0&quality=88&crop=96,96,768,768&sign=2e5c6fe18010e198f56e0ff29b187d52&ava=1",
        followed: true,
        fullName: "Lena A",
        status: "Good Morning",
        location: { city: "Minsk", country: "Belarus" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                src={u.photoUrl}
                alt="фото пользователя"
                className={styles.user__photo}
              />{" "}
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
