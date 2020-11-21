import { stopSubmit } from "redux-form";
import { profileAPI } from "../API/api";

const addPost = "samurai-network/profile/ADD-POST";
const setUserProfile = "samurai-network/profile/SET-USER-PROFILE";
const setStatus = "samurai-network/profile/SET-STATUS";
const savePhotoSucces = "samurai-network/profile/SAVE-PHOTO-SUCCES";

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
    case savePhotoSucces:
      return { ...state, profile: { ...state.profile, photos: action.photos } };

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
export const savePhotoAC = (photos) => ({
  type: savePhotoSucces,
  photos,
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
export const savePhotoThunk = (file) => {
  return async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.resultCode === 0) {
      dispatch(savePhotoAC(response.data.photos));
    }
  };
};
export const saveProfileThunk = (profile) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);
    if (response.resultCode === 0) {
      dispatch(setUserThunk(userId));
    } else {
      let message =
        response.messages.length > 0 ? response.messages[0] : "Some Error";
      dispatch(stopSubmit("edit-profile", { _error: message }));
      return Promise.reject(message)
    }
  };
};

export default profileReducer;
