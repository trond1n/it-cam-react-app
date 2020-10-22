import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink
            activeClassName={classes.active}
            className={classes.item}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>

        <li>
          <NavLink
            activeClassName={classes.active}
            className={classes.item}
            to="/dialogs"
          >
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={classes.active}
            className={classes.item}
            to="/news"
          >
            News
          </NavLink>
        </li>

        <li>
          <NavLink
            activeClassName={classes.active}
            className={classes.item}
            to="/music"
          >
            Music
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={classes.active}
            className={classes.item}
            to="/settings"
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
