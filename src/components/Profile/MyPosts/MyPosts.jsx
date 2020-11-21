import React from "react";
import AddPostReduxForm from "./AddPostForm";

import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post key={post.id} message={post.message} likeCount={post.likeCount} />
  ));

  let onAddPost = (e) => {
    props.addPost(e.newPostBody);
  };

  return (
    <div className={classes.post__block}>
      <h3>My Posts</h3>
      <AddPostReduxForm onSubmit={onAddPost} />
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
