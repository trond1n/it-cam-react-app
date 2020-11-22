import React from "react";
import { reduxForm } from "redux-form";
import { createField, Input } from "../Common/FormsControls/FormsControls";
import { required } from "../Utils/Validators/validator";
import classes from "../Common/FormsControls/FormsControl.module.css";
const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [required], Input)}
      {createField("password", "password", [required], Input, {
        type: "password",
      })}
      {createField(
        null,
        "rememberMe",
        [],
        Input,
        {
          type: "checkbox",
        },
        "remember me"
      )}
      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl &&
        createField("введите символы с картинки", "captcha", [required], Input)}
      {error && <div className={classes.form__summary_error}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export default LoginReduxForm;
