import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostBody) => {
      dispatch(addPostActionCreator(newPostBody));
    },
  };
};

const MyPostsContaiter = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContaiter;
