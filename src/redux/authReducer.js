import { stopSubmit } from "redux-form";
import { authAPI } from "../API/api";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const setUsersThunk = () => async (dispatch) => {
  let response = await authAPI.me();

  if (response.resultCode === 0) {
    let { id, email, login } = response.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const loginThunk = (email, password, rememberMe) => {
  return async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.resultCode === 0) {
      dispatch(setUsersThunk());
    } else {
      let message =
        response.messages.length > 0 ? response.messages[0] : "Some Error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };
};
export const logoutThunk = () => {
  return async (dispatch) => {
    let response = await authAPI.logout();
    if (response.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  };
};

export default authReducer;
