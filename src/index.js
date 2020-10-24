import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let postsData = [
  { id: 1, message: "Hi! How r u?", likeCount: 15 },
  { id: 2, message: "Hi! It's my first post", likeCount: 20 },
];

let dialogsData = [
  { id: 1, name: "Dima" },
  { id: 2, name: "Mom" },
  { id: 3, name: "Dad" },
  { id: 4, name: "Lena" },
  { id: 5, name: "Andrew" },
  { id: 6, name: "Mike" },
];
let messagesData = [
  { id: 1, message: "Hello" },
  { id: 2, message: "H r U?" },
  { id: 3, message: "Nice code" },
  { id: 4, message: "I'm fine" },
  { id: 5, message: "Have a nice day!" },
  { id: 6, message: "God bless u" },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={postsData} dialogs={dialogsData} messages={messagesData} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
