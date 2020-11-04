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
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);

      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
        this.props.totalUsersCount / this.props.pageSize
      ),
      pages = [];
    for (let i = 1; i <= 10; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map((p) => {
            return (
              <span
                onClick={(e) => {
                  this.onPageChanged(p);
                }}
                className={
                  this.props.currentPage === p && styles.selected__page
                }
              >
                {p}
              </span>
            );
          })}
        </div>
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
