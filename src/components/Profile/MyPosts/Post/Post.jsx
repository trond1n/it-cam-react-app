import React from "react";
import classes from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        className={classes.img}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbJjaUVrc9az_B1Rqphs0EULawVrCg_mBMIg&usqp=CAU"
        alt=""
      />
      {props.message}
      <div>
        <span>likes: {props.likeCount}</span>
      </div>
    </div>
  );
};
export default Post;
