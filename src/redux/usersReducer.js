import { usersAPI } from "../API/api";
import { updateObjectInArray } from "../components/Utils/object-helpers";
const follow = "samurai-network/app/FOLLOW";
const unfollow = "samurai-network/users/UNFOLLOW";
const setUsers = "samurai-network/users/SET_USERS";
const setCurrentPage = "samurai-network/users/SET_CURRENT_PAGE";
const setTotalUsersCount = "samurai-network/users/SET_TOTAL_USERS_COUNT";
const toggleIsFetching = "samurai-network/users/TOGGLE_IS_FETCHING";
const toggleIsFollowingProgress =
  "samurai-network/users/TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case follow:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };

    case unfollow:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case setUsers:
      return { ...state, users: action.users };
    case setCurrentPage:
      return { ...state, currentPage: action.currentPage };
    case setTotalUsersCount:
      return { ...state, totalUsersCount: action.count };
    case toggleIsFetching:
      return { ...state, isFetching: action.isFetching };
    case toggleIsFollowingProgress:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

const followSuccess = (userId) => ({ type: follow, userId });
const unfollowSuccess = (userId) => ({ type: unfollow, userId });
const setUsersAC = (users) => ({ type: setUsers, users });
export const setCurrentPageAC = (currentPage) => ({
  type: setCurrentPage,
  currentPage,
});
const setTotalUsersCountAC = (count) => ({
  type: setTotalUsersCount,
  count,
});
const toggleIsFetchingAC = (isFetching) => ({
  type: toggleIsFetching,
  isFetching,
});
export const toggleIsFollowingProgressAC = (isFetching, userId) => ({
  type: toggleIsFollowingProgress,
  isFetching,
  userId,
});

export const getUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    let response = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetchingAC(false));
    dispatch(setUsersAC(response.items));
    dispatch(setTotalUsersCountAC(response.totalCount));
  };
};

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
  dispatch(toggleIsFollowingProgressAC(true, id));
  let response = await apiMethod(id);
  if (response.resultCode === 0) {
    dispatch(actionCreator(id));
  }
  dispatch(toggleIsFollowingProgressAC(false, id));
};

export const followThunk = (id) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      id,
      usersAPI.follow.bind(usersAPI),
      followSuccess
    );
  };
};
export const unFollowThunk = (id) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      id,
      usersAPI.unFollow.bind(usersAPI),
      unfollowSuccess
    );
  };
};

export default usersReducer;
