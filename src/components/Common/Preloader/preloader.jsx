import preloader from "../../../assets/images/preloader.svg";
import React from "react";

const Preloader = (props) => {
  return (
    <div>
      <img src={preloader} alt={'прелоадер'}/>{" "}
    </div>
  );
};

export default Preloader;
