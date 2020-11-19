import React from "react";
import { Component } from "react";
import { connect, Provider } from "react-redux";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import Preloader from "./components/Common/Preloader/preloader";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";

import HeaderContainer from "./components/Header/HeaderContainer";
import { WithSuspense } from "./components/HOC/withSuspense";
import LoginPage from "./components/Login/Login";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import { initializeAppThunk as initializeApp } from "./redux/appReducer";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        {/* <FriendList /> */}
        <div className="app-wrapper__content">
          <Route path="/dialogs" render={WithSuspense(DialogsContainer)} />
          <Route
            path="/profile/:userId?"
            render={WithSuspense(ProfileContainer)}
          />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginPage />} />

          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiJSApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default SamuraiJSApp;
