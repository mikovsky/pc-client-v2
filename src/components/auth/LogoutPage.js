import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

class LogoutPage extends Component {
  componentDidMount() {
    this.props.logout();
    setTimeout(() => this.props.history.push("/login"), 5000);
  }
  render() {
    return (
      <div className="alert alert-success mt-5" role="alert">
        <h4 className="alert-heading">Success!</h4>
        <p>You have been successfully logged out from application!</p>
        <hr />
        <p className="mb-0">
          You will be redirect to Login Page in 5 seconds...
        </p>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(LogoutPage);
