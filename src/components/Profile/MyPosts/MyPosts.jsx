import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  let PostsData = [
    { id: 1, message: "Hi! How r u?", likeCount: 15 },
    { id: 2, message: "Hi! It's my first post", likeCount: 20 },
  ];

  return (
    <div className={classes.post__block}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        <Post message="Hi! How r u?" likeCount="15" />
        <Post message="Hi! It's my first post" likeCount="20" />
      </div>
    </div>
  );
};
export default MyPosts;
