import React from "react";
import { Field, reduxForm } from "redux-form";
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={"textarea"}
          name={"newMessageBody"}
          placeholder="Введите сообщение "
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);

export default AddMessageReduxForm;
