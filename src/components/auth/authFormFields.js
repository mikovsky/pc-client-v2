import React from "react";
import { Field } from "redux-form";
import classnames from "classnames";

export const usernameField = props => {
  const { errors } = props;
  return (
    <div className="form-label-group">
      <Field
        name="username"
        type="text"
        component="input"
        className={classnames("form-control", {
          "is-invalid": errors.username
        })}
      />
      <label>Username</label>
      {errors.username && (
        <div className="invalid-feedback text-center">{errors.username}</div>
      )}
    </div>
  );
};

export const firstnameField = props => {
  const { errors } = props;
  return (
    <div className="form-label-group">
      <Field
        name="firstname"
        type="text"
        component="input"
        className={classnames("form-control", {
          "is-invalid": errors.firstname
        })}
      />
      <label>First Name</label>
      {errors.firstname && (
        <div className="invalid-feedback text-center">{errors.firstname}</div>
      )}
    </div>
  );
};

export const passwordField = props => {
  const { errors } = props;
  return (
    <div className="form-label-group">
      <Field
        name="password"
        type="password"
        component="input"
        className={classnames("form-control", {
          "is-invalid": errors.password
        })}
      />
      <label>Password</label>
      {errors.password && (
        <div className="invalid-feedback text-center">{errors.password}</div>
      )}
    </div>
  );
};

export const confirmPasswordField = props => {
  const { errors } = props;
  return (
    <div className="form-label-group">
      <Field
        name="confirmPassword"
        type="password"
        component="input"
        className={classnames("form-control", {
          "is-invalid": errors.confirmPassword
        })}
      />
      <label>Confirm Password</label>
      {errors.confirmPassword && (
        <div className="invalid-feedback text-center">
          {errors.confirmPassword}
        </div>
      )}
    </div>
  );
};
