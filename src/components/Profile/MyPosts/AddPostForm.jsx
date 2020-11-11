import React from "react";
import { Field, reduxForm } from "redux-form";
const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={"textarea"}
          name={"newPostBody"}
          placeholder="Что сегодня произошло?"
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
