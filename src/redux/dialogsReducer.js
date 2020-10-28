const updNewMessageBody = "UPDATE-NEW-MESSAGE-BODY";
const sendMessage = "SEND-MESSAGE";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case updNewMessageBody:
      state.newMessageBody = action.body;
      return state;
    case sendMessage:
      let body = state.newMessageBody;
      state.messagesData.push({ id: 6, message: body });
      state.newMessageBody = "";
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: sendMessage });
export const updateNewMessageBodyCreator = (body) => ({
  type: updNewMessageBody,
  body: body,
});
export default dialogsReducer;
