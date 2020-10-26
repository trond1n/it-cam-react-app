import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/state";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likeCount={post.likeCount} />
  ));
  let newPostElement = React.createRef();

  let addPost = () => {
    // let text = newPostElement.current.value;
    props.dispatch(addPostActionCreator());
    // props.updateNewPostText('');
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // let action = { type: "UPDATE-NEW-POST-TEXT", };
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={classes.post__block}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
