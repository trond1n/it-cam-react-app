import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    postsData: [
      { id: 1, message: "Hi! How r u?", likeCount: 15 },
      { id: 2, message: "Hi! It's my first post", likeCount: 20 },
    ],
  },
  friendsList: {
    friends: [
      {
        id: 4,
        name: "Lena",
        img: "https://99px.ru/sstorage/1/2009/06/1010609174346.gif",
      },
      {
        id: 5,
        name: "Andrew",
        img: "https://99px.ru/sstorage/1/2009/05/1200509145156.gif",
      },
      {
        id: 6,
        name: "Mike",
        img: "https://99px.ru/sstorage/1/2009/05/1160509141516.jpg",
      },
    ],
  },

  dialogsPage: {
    dialogsData: [
      {
        id: 1,
        name: "Dima",
        img:
          "https://99px.ru/sstorage/1/2009/12/image_10612090726499603257.gif",
      },
      {
        id: 2,
        name: "Mom",
        img:
          "https://99px.ru/sstorage/1/2009/12/image_10112091349147281492.jpg",
      },
      {
        id: 3,
        name: "Dad",
        img: "https://99px.ru/sstorage/1/2009/05/1210509134410.jpg",
      },
      {
        id: 4,
        name: "Lena",
        img: "https://99px.ru/sstorage/1/2009/06/1010609174346.gif",
      },
      {
        id: 5,
        name: "Andrew",
        img: "https://99px.ru/sstorage/1/2009/05/1200509145156.gif",
      },
      {
        id: 6,
        name: "Mike",
        img: "https://99px.ru/sstorage/1/2009/05/1160509141516.jpg",
      },
    ],
    messagesData: [
      { id: 1, message: "Hello" },
      { id: 2, message: "H r U?" },
      { id: 3, message: "Nice code" },
      { id: 4, message: "I'm fine" },
      { id: 5, message: "Have a nice day!" },
      { id: 6, message: "God bless u" },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likeCount: 0,
  };
  state.profilePage.postsData.push(newPost);
  rerenderEntireTree(state);
};

export default state;
