import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

class LogoutPage extends Component {
  componentDidMount() {
    this.props.logout();
    setTimeout(() => this.props.history.push("/login"), 2000);
  }
  render() {
    return <div>Logged out!</div>;
  }
}

export default connect(
  null,
  actions
)(LogoutPage);
