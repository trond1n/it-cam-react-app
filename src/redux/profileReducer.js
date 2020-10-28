const addPost = "ADD-POST";
const updNewPostText = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postsData: [
    { id: 1, message: "Hi! How r u?", likeCount: 15 },
    { id: 2, message: "Hi! It's my first post", likeCount: 20 },
  ],
  newPostText: "it-cam",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case addPost:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0,
      };
      state.postsData.push(newPost);
      state.newPostText = "";
      return state;
    case updNewPostText:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: addPost });
export const updateNewPostTextActionCreator = (text) => ({
  type: updNewPostText,
  newText: text,
});

export default profileReducer;
