import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map((dialog) => (
    <DialogItem
      img={dialog.img}
      name={dialog.name}
      key={dialog.id}
      id={dialog.id}
    />
  ));
  let messagesElements = state.messagesData.map((message) => (
    <Message message={message.message} id={message.id} key={message.id} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
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
