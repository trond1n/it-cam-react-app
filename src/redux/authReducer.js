import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../API/api";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";
const getCaptchaUrlSucces = "samurai-network/auth/GET_CAPTCHA_URL_SUCCES";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case getCaptchaUrlSucces:
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
export const getCaptchaUrlSuccesAC = (captchaUrl) => ({
  type: getCaptchaUrlSucces,
  payload: { captchaUrl },
});

export const setUsersThunk = () => async (dispatch) => {
  let response = await authAPI.me();

  if (response.resultCode === 0) {
    let { id, email, login } = response.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const loginThunk = (email, password, rememberMe, captcha) => {
  return async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.resultCode === 0) {
      dispatch(setUsersThunk());
    } else {
      if (response.resultCode === 10) {
        dispatch(getCaptchaUrlThunk());
      }
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
export const getCaptchaUrlThunk = () => {
  return async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    const captcha = response.url;
    dispatch(getCaptchaUrlSuccesAC(captcha));
  };
};

export default authReducer;
