import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div>
      mypost
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post message="Hi! How r u?" likeCount="15" />
        <Post message="Hi! It's my first post" likeCount="20" />
      </div>
    </div>
  );
};
export default MyPosts;
