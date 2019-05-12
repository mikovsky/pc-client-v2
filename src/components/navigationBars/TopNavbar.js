import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class TopNavbar extends Component {
  renderMenuLinks = () => {
    if (this.props.authenticated) {
      return (
        <React.Fragment>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/wallet">
                  Wallet
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">
                  News
                </Link>
              </li>
            </ul>
            <Link
              to="/logout"
              className="btn btn-sm btn-outline-warning my-2 my-sm-0"
            >
              Log Out
            </Link>
          </div>
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <Link to="/dashboard" className="navbar-brand">
          Profit-Coin
        </Link>
        {this.renderMenuLinks()}
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authReducer.authenticated
  };
};

export default connect(mapStateToProps)(TopNavbar);
