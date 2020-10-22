import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a className={`${classes.item} ${classes.active}`} href="/profile">
            Profile
          </a>
        </li>

        <li>
          <a className={classes.item} href="/dialogs">
            Messages
          </a>
        </li>
        <li>
          <a className={`${classes.item}`} href="/news">
            News
          </a>
        </li>

        <li>
          <a className={classes.item} href="/music">
            Music
          </a>
        </li>
        <li>
          <a className={classes.item} href="/settings">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
