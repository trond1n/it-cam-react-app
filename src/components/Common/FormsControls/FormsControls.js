import React from "react";
import { Field } from "redux-form";
import classes from "./FormsControl.module.css";

const FormsControl = ({ input, meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (
    <div
      className={classes.form__control + " " + (hasError ? classes.error : "")}
    >
      <div>{children}</div>
      <div>{hasError && <span>{error}</span>}</div>
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

export const createField = (
  placeholder,
  name,
  validatators,
  component,
  props = {},
  text
) => {
  return (
    <div>
      <Field
        name={name}
        placeholder={placeholder}
        component={component}
        validate={validatators}
        {...props}
      />
      {text}
    </div>
  );
};
