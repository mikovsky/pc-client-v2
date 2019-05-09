import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import classnames from "classnames";

import authFormWrapper from "./authFormWrapper";
import * as actions from "../../redux/actions";

class LoginPage extends Component {
  onSubmit = formProps => {
    this.props.login(formProps, () => this.props.history.push("/"));
  };

  usernameField = () => {
    const { errors } = this.props;
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

  passwordField = () => {
    const { errors } = this.props;
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

  render() {
    const { handleSubmit } = this.props;
    return (
      <React.Fragment>
        <h5 className="card-title text-center text-light">Log In</h5>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          {this.usernameField()}
          {this.passwordField()}
          <button className="btn btn-lg btn-outline-warning btn-block">
            Log In
          </button>
          <hr className="my-4 hr-color" />
          <Link
            to="/register"
            className="btn btn-lg btn-outline-warning btn-block"
          >
            Create an account
          </Link>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state.errorReducer
  };
};

export default authFormWrapper(
  compose(
    connect(
      mapStateToProps,
      actions
    ),
    reduxForm({ form: "login" })
  )(LoginPage)
);
