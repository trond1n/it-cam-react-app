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
};

export const authAPI = {
  me() {
    return instance.get(`/auth/me`).then((response) => response.data);
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance
      .post(`/auth/login`, { email, password, rememberMe, captcha })
      .then((response) => response.data);
  },
  logout() {
    return instance.delete(`/auth/login`).then((response) => response.data);
  },
};
export const securityAPI = {
  getCaptchaUrl() {
    return instance
      .get(`security/get-captcha-url`)
      .then((response) => response.data);
  },
};

export const profileAPI = {
  setUserProfile(id) {
    return instance.get(`profile/${id}`).then((response) => response.data);
  },
  getStatus(id) {
    return instance
      .get(`profile/status/${id}`)
      .then((response) => response.data);
  },
  updateStatus(status) {
    return instance
      .put("profile/status/", { status })
      .then((response) => response.data);
  },
  savePhoto(profilePhoto) {
    const formData = new FormData();
    formData.append("image", profilePhoto);

    return instance
      .put("profile/photo/", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      })
      .then((response) => response.data);
  },
  saveProfile(profile) {
    return instance.put("profile", profile).then((response) => response.data);
  },
};
