import React from "react";
import FriendListItem from "./FriendsListItem/FriendListItem";
import classes from "./FriendList.module.css";
// import StoreContext from "../../StoreContext";

// const FriendList = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();
//         let friendsListElement = state.friendsList.friends.map((item) => (
//           <FriendListItem img={item.img} name={item.name} id={item.id} />
//         ));
//         return (
//           <div className={classes.friends}>
//             <div className={classes.friends__items}>{friendsListElement}</div>
//           </div>
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };
// export default FriendList;
