import React from "react";
import classes from "./Dialogs.module.css";
const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>
        <div className={classes.dialog}>Dima</div>
        <div className={classes.dialog + " " + classes.active}>Andrew</div>
        <div className={classes.dialog}>Lena</div>
        <div className={classes.dialog}>Alex</div>
        <div className={classes.dialog}>Max</div>
        <div className={classes.dialog}>Ivan</div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hello</div>
        <div className={classes.message}>H r U?</div>
        <div className={classes.message}>Nice code</div>
      </div>
    </div>
  );
};
export default Dialogs;
