import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

import authFormWrapper from "./authFormWrapper";
import * as actions from "../../redux/actions";
import {
  usernameField,
  firstnameField,
  passwordField,
  confirmPasswordField
} from "./authFormFields";

class RegisterPage extends Component {
  componentDidMount() {
    this.props.cleanUpErrorsOnSwitchingForms();
  }

  onSubmit = formProps => {
    this.props.register(formProps, () => this.props.history.push("/login"));
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <React.Fragment>
        <h5 className="card-title text-center text-light">Log In</h5>
        <form className="form-signin" onSubmit={handleSubmit(this.onSubmit)}>
          {usernameField(this.props)}
          {firstnameField(this.props)}
          {passwordField(this.props)}
          {confirmPasswordField(this.props)}
          <button className="btn btn-lg btn-outline-warning btn-block">
            Register
          </button>
          <hr className="my-4 hr-color" />
          <Link
            to="/login"
            className="btn btn-lg btn-outline-warning btn-block"
          >
            Already Have An Account
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
  )(RegisterPage)
);
