import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

class LogoutPage extends Component {
  componentDidMount() {
    this.props.logout();
  }
  render() {
    return <div>Logged out!</div>;
  }
}

export default connect(
  null,
  actions
)(LogoutPage);
