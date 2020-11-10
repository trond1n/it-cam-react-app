import React from "react"; // import classes from "./Login.module.css";
import LoginReduxform from "./LoginForm";
const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxform onSubmit={onSubmit} />
    </div>
  );
};
export default Login;
