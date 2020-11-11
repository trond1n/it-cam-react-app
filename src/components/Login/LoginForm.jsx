import React from "react";
import { Field, reduxForm } from "redux-form";
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"login"}
          placeholder="login"
          type="text"
          component={"input"}
        />
      </div>
      <div>
        <Field
          name={"password"}
          placeholder="password"
          type="text"
          component={"input"}
        />
      </div>
      <div>
        <Field name={"rememberMe"} type="checkbox" component={"input"} />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export default LoginReduxForm;
