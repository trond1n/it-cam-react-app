import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./FriendListItem.module.css";

const FriendListItem = (props) => {
  return (
    <div>
      <div className={classes.friends__item}>
        <img className={classes.img} src={props.img} alt="user avatar" />
        <div>{props.name}</div>
      </div>
    </div>
  );
};

export default FriendListItem;
