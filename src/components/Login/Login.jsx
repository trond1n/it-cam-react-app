import React from "react"; // import classes from "./Login.module.css";
import { connect } from "react-redux";
import LoginReduxform from "./LoginForm";
import { loginThunk as login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";


const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxform onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
