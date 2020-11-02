import React from "react";
import styles from "./users.module.css";
import * as axios from "axios";

//функциональная компонента
// const Users = (props) => {
//   let getUsers = () => {
//     if (props.users.length === 0) {
//       axios
//         .get("https://social-network.samuraijs.com/api/1.0/users")
//         .then((response) => {
//           props.setUsers(response.data.items);
//         });
//     }
//   };

//   return (
//     <div>
//       <button onClick={getUsers}>Get Users</button>
//       {props.users.map((u) => (
//         <div key={u.id}>
//           <span>
//             <div>
//               <img
//                 src={
//                   u.photos.small != null
//                     ? u.photos.small
//                     : "https://vk.com/images/camera_400.png?ava=1"
//                 }
//                 alt="фото пользователя"
//                 className={styles.user__photo}
//               />{" "}
//             </div>
//             <div>
//               {u.followed ? (
//                 <button
//                   onClick={() => {
//                     props.unfollow(u.id);
//                   }}
//                 >
//                   Unfollow
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => {
//                     props.follow(u.id);
//                   }}
//                 >
//                   Follow
//                 </button>
//               )}
//             </div>
//           </span>
//           <span>
//             <div>{u.name}</div>
//             <div>{u.status}</div>
//           </span>
//           <span>
//             <div>{"Страна"}</div>
//             <div>{"Город"}</div>
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// };

//классовая компонента
class Users extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    }
  }

  render() {
    return (
      <div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={
                    u.photos.small != null
                      ? u.photos.small
                      : "https://vk.com/images/camera_400.png?ava=1"
                  }
                  alt="фото пользователя"
                  className={styles.user__photo}
                />{" "}
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"Страна"}</div>
              <div>{"Город"}</div>
            </span>
          </div>
        ))}
      </div>
    );
  }
}
export default Users;
