import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../Common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../Utils/Validators/validator";

const maxLength10 = maxLengthCreator(10);
const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={"newPostBody"}
          placeholder="Что сегодня произошло?"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Добавить пост</button>
      </div>
    </form>
  );
};

const AddPostReduxForm = reduxForm({ form: "addPostForm" })(AddPostForm);

export default AddPostReduxForm;
