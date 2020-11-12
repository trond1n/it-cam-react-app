import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <header className={classes.header}>
      <div>
        <img
          className={classes.img}
          src="https://www.clubsportive.nl/wp-content/uploads/2018/12/logo-example-300x150.jpg"
          alt="logo"
        />
      </div>

      <div className={classes.login__block}>
        {props.isAuth ? (
          <div>
            {" "}
            {props.login} - <button onClick={props.logout}>Выйти</button>{" "}
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
