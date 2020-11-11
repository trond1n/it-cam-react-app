import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../Common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../Utils/Validators/validator";

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[required, maxLength100]}
          component={Textarea}
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

const AddMessageReduxForm = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default AddMessageReduxForm;
