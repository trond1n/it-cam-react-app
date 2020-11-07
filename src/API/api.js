import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",

  headers: {
    "API-KEY": "f84e5cfa-8051-44bf-96f8-cf869b556a7a",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  follow(id) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },
  unFollow(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
  setUserProfile(id) {
    return instance.get(`profile/` + id).then((response) => response.data);
  },
  setAuthUserData() {
    return instance.get(`/auth/me`).then((response) => response.data);
  },
};
