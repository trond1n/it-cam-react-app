import React from "react";
import { Redirect } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm";

const Dialogs = (props) => {
  const state = props.dialogsPage;

  const dialogsElements = state.dialogsData.map((dialog) => (
    <DialogItem
      img={dialog.img}
      name={dialog.name}
      key={dialog.id}
      id={dialog.id}
    />
  ));
  const messagesElements = state.messagesData.map((message) => (
    <Message message={message.message} id={message.id} key={message.id} />
  ));

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessageForm onSubmit={addNewMessage} />
    </div>
  );
};
export default Dialogs;
