import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
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

  let dialogsElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = messagesData.map((message) => (
    <Message message={message.message} id={message.id} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};
export default Dialogs;
