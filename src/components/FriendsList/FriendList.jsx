import React from "react";
import FriendListItem from "./FriendsListItem/FriendListItem";
import classes from "./FriendList.module.css";

const FriendList = (props) => {
  let friendsListElement = props.state.friends.map((item) => (
    <FriendListItem img={item.img} name={item.name} id={item.id} />
  ));

  return (
    <div className={classes.friends}>
      <div className={classes.friends__items}>{friendsListElement}</div>
    </div>
  );
};
export default FriendList;
