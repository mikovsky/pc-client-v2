import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class TopNavbar extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <span className="nav-link">Log Out</span>
          </li>
        </ul>
      );
    }
  }
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow navbar-color">
          <Link
            to="/dashboard"
            className="navbar-brand col-sm-3 col-md-2 mr-0 text-center"
          >
            Profit-Coin
          </Link>
          {this.renderLinks()}
        </nav>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authReducer.authenticated
  };
};

export default connect(mapStateToProps)(TopNavbar);
