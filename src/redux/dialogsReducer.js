const sendMessage = "SEND-MESSAGE";
let initialState = {
  dialogsData: [
    {
      id: 1,
      name: "Dima",
      img: "https://99px.ru/sstorage/1/2009/12/image_10612090726499603257.gif",
    },
    {
      id: 2,
      name: "Mom",
      img: "https://99px.ru/sstorage/1/2009/12/image_10112091349147281492.jpg",
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case sendMessage:
      let body = action.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: body }],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: sendMessage,
  newMessageBody,
});

export default dialogsReducer;
