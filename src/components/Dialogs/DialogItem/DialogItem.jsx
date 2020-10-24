import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogItem.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div>
      
      <NavLink
        activeClassName={classes.active}
        className={classes.dialog}
        to={path}
      >
        <img className={classes.img} src={props.img} alt="user avatar" />
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
