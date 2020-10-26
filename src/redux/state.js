// import { rerenderEntireTree } from "../render";

const addPost = "ADD-POST";
const updNewPostText = "UPDATE-NEW-POST-TEXT";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hi! How r u?", likeCount: 15 },
        { id: 2, message: "Hi! It's my first post", likeCount: 20 },
      ],
      newPostText: "it-cam",
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
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === addPost) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";

      this._callSubscriber(this._state);
    } else if (action.type === updNewPostText) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: addPost });
export const updateNewPostTextActionCreator = (text) => ({
  type: updNewPostText,
  newText: text,
});

window.store = store;

export default store;
