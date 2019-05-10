import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

import authFormWrapper from "./authFormWrapper";
import * as actions from "../../redux/actions";
import { usernameField, passwordField } from "./authFormFields";

class LoginPage extends Component {
  componentDidMount() {
    this.props.cleanUpErrorsOnSwitchingForms();
  }

  onSubmit = formProps => {
    this.props.login(formProps, () => this.props.history.push("/dashboard"));
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <React.Fragment>
        <h5 className="card-title text-center text-light">Log In</h5>
        <form className="form-signin" onSubmit={handleSubmit(this.onSubmit)}>
          {usernameField(this.props)}
          {passwordField(this.props)}
          {this.props.errors.serverError && (
            <div class="alert alert-danger" role="alert">
              {this.props.errors.serverError}
            </div>
          )}
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
