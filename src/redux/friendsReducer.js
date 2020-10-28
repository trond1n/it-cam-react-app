let initialState = {
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
};

const friendsReducer = (state = initialState, action) => {
  return state;
};
export default friendsReducer;
