import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogsData.map((dialog) => (
    <DialogItem img={dialog.img} name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = state.messagesData.map((message) => (
    <Message message={message.message} id={message.id} />
  ));
  let newMessageBody = state.newMessageBody;
  // let newMessageElement = React.createRef();

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
      </div>
      <div>
        <div>
          <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder="Введите сообщение "
            // ref={newMessageElement}
          ></textarea>
        </div>
        <div>
          {" "}
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
