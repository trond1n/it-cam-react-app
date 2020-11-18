import ReactDOM from "react-dom";
import App from "../App";
import React from "react";
const {
  default: profileReducer,
  addPostActionCreator,
} = require("./profileReducer");

it("lenght of posts should be incremented", () => {
  let action = addPostActionCreator("it-kam.com");
  let state = {
    postsData: [
      { id: 1, message: "Hi! How r u?", likeCount: 15 },
      { id: 2, message: "Hi! It's my first post", likeCount: 20 },
    ],
  };
  let newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(5);
  expect(newState.postsData[4].message).toBe("it-kam.com");
});
