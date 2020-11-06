import { combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friendsList: friendsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers);
export default store;
