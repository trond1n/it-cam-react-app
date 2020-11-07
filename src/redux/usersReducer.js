const follow = "FOLLOW";
const unfollow = "UNFOLLOW";
const setUsers = "SET_USERS";
const setCurrentPage = "SET_CURRENT_PAGE";
const setTotalUsersCount = "SET_TOTAL_USERS_COUNT";
const toggleIsFetching = "TOGGLE_IS_FETCHING";
const toggleIsFollowingProgress = "TOGGLE_IS_FOLLOWING_PROGRESS";

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
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case unfollow:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
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
          : state.followingInProgress.filter((id) => id != action.userId),
      };

    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: follow, userId });
export const unfollowAC = (userId) => ({ type: unfollow, userId });
export const setUsersAC = (users) => ({ type: setUsers, users });
export const setCurrentPageAC = (currentPage) => ({
  type: setCurrentPage,
  currentPage,
});
export const setTotalUsersCountAC = (count) => ({
  type: setTotalUsersCount,
  count,
});
export const toggleIsFetchingAC = (isFetching) => ({
  type: toggleIsFetching,
  isFetching,
});
export const toggleIsFollowingProgressAC = (isFetching, userId) => ({
  type: toggleIsFollowingProgress,
  isFetching,
  userId,
});

export default usersReducer;
