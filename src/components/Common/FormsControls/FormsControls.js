import React from "react";
import classes from "./FormsControl.module.css";

const FormsControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div
      className={classes.form__control + " " + (hasError ? classes.error : "")}
    >
      <div>
          {props.children}
          </div>
      <div>{hasError && <span>{meta.error}</span>}</div>
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormsControl {...props}>
      <textarea {...input} {...restProps}></textarea>
    </FormsControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;

  return (
    <FormsControl {...props}>
      <input {...input} {...restProps} />
    </FormsControl>
  );
};
