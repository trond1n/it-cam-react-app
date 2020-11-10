import { profileAPI } from "../API/api";

const addPost = "ADD-POST";
const updNewPostText = "UPDATE-NEW-POST-TEXT";
const setUserProfile = "SET-USER-PROFILE";
const setStatus = "SET-STATUS";

let initialState = {
  postsData: [
    { id: 1, message: "Hi! How r u?", likeCount: 15 },
    { id: 2, message: "Hi! It's my first post", likeCount: 20 },
  ],
  newPostText: "it-cam",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case addPost:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
      };

    case updNewPostText:
      return { ...state, newPostText: action.newText };
    case setUserProfile:
      return { ...state, profile: action.profile };
    case setStatus:

      return { ...state, status: action.status };

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: addPost });
export const updateNewPostTextActionCreator = (text) => ({
  type: updNewPostText,
  newText: text,
});
export const setUserProfileAC = (profile) => ({
  type: setUserProfile,
  profile,
});
export const setStatusAC = (status) => ({
  type: setStatus,
  status,
});

export const setUserThunk = (id) => {
  return (dispatch) => {
    profileAPI.setUserProfile(id).then((data) => {
      dispatch(setUserProfileAC(data));
    });
  };
};
export const getStatusThunk = (id) => {
  return (dispatch) => {
    profileAPI.getStatus(id).then((data) => {
      dispatch(setStatusAC(data));
    });
  };
};

export const updateStatusThunk = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatusAC(data));
      }
    });
  };
};

export default profileReducer;
