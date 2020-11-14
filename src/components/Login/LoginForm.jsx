import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../Common/FormsControls/FormsControls";
import { required } from "../Utils/Validators/validator";
import classes from "../Common/FormsControls/FormsControl.module.css";
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"email"}
          placeholder="email"
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          name={"password"}
          placeholder="password"
          component={Input}
          validate={[required]}
          type="password"
        />
      </div>
      <div>
        <Field name={"rememberMe"} type={"checkbox"} component={Input} />
        remember me
      </div>
      {props.error && (
        <div className={classes.form__summary_error}>{props.error}</div>
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export default LoginReduxForm;
