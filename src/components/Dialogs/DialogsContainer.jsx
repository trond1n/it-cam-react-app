import { connect } from "react-redux";
import { compose } from "redux";
import { sendMessageCreator } from "../../redux/dialogsReducer";
import { withAuthRedirect } from "../HOC/withAuthRedirect";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
