import React from "react";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <img
        className={classes.img}
        src="https://www.clubsportive.nl/wp-content/uploads/2018/12/logo-example-300x150.jpg"
        alt="logo"
      />
    </header>
  );
};
export default Header;
