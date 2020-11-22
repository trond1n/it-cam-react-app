import { setUsersThunk as getAuthUserData } from "./authReducer";

const setInitialized = "samurai-network/app/SET_INITIALIZED";

let initialState = {
  initialized: false,
  globalError: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case setInitialized:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: setInitialized,
});

export const initializeAppThunk = () => {
  return (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
      dispatch(initializedSuccess());
    });
  };
};

export default appReducer;
