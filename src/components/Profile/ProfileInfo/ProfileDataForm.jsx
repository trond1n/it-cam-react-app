import React from "react";
import { reduxForm } from "redux-form";
import {
  createField,
  Input,
  Textarea,
} from "../../Common/FormsControls/FormsControls";
import styles from "./ProfileInfo.module.css";
import classes from "../../Common/FormsControls/FormsControl.module.css";

const ProfileDataForm = ({ handleSubmit, initialValues, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {error && <div className={classes.form__summary_error}>{error}</div>}
      <div>
        <button onClick={() => {}}>Save</button>
      </div>

      <div>
        <b>Full Name: </b> {createField("Full name", "fullName", [], Input)}
      </div>
      <div>
        <b>Loking for a job: </b>{" "}
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>My Professional Skills: </b>{" "}
        {createField(
          "my professional skills",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>

      <div>
        <b>About me: </b> {createField("About me", "aboutMe", [], Textarea)}
      </div>
      <div>
        <b>Contacts: </b>{" "}
        {Object.keys(initialValues.contacts).map((key) => {
          return (
            <div key={key} className={styles.contacts}>
              <b>
                {key}: {createField(key, "contacts." + key, [], Input)}
              </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);
export default ProfileDataReduxForm;
