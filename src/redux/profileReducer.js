import { profileAPI } from "../API/api";

const addPost = "samurai-network/profile/ADD-POST";
const setUserProfile = "samurai-network/profile/SET-USER-PROFILE";
const setStatus = "samurai-network/profile/SET-STATUS";

let initialState = {
  postsData: [
    { id: 1, message: "Hi! How r u?", likeCount: 15 },
    { id: 2, message: "Hi! It's my first post", likeCount: 20 },
  ],
  newPostText: "it-cam",
  profile: null,
  status: "----",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case addPost:
      let newPost = {
        id: 5,
        message: action.newPostBody,
        likeCount: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
      };

    case setUserProfile:
      return { ...state, profile: action.profile };
    case setStatus:
      return { ...state, status: action.status };

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostBody) => ({
  type: addPost,
  newPostBody,
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
  return async (dispatch) => {
    let response = await profileAPI.setUserProfile(id);
    dispatch(setUserProfileAC(response));
  };
};
export const getStatusThunk = (id) => {
  return async (dispatch) => {
    let response = await profileAPI.getStatus(id);
    dispatch(setStatusAC(response));
  };
};

export const updateStatusThunk = (status) => {
  return async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.resultCode === 0) {
      dispatch(setStatusAC(status));
    }
  };
};

export default profileReducer;
