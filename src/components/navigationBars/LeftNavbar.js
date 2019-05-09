import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class LeftNavbar extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <ul className="nav flex-column text-center mt-3">
          <li className="nav-item h6">
            <Link to="/dashboard" className="nav-link active text-light">
              <i className="fas fa-chart-line" />
              <span> Dashboard</span>
            </Link>
          </li>
          <li className="nav-item h6">
            <Link to="/wallet" className="nav-link text-light">
              <i className="fas fa-wallet" />
              <span> Wallet</span>
            </Link>
          </li>
          <li className="nav-item h6">
            <Link to="/news" className="nav-link text-light">
              <i className="fas fa-newspaper" />
              <span> News</span>
            </Link>
          </li>
        </ul>
      );
    }
  }

  render() {
    return (
      <nav className="col-md-2 d-none d-md-block bg-dark text-light sidebar">
        <div className="sidebar-sticky">{this.renderLinks()}</div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authReducer.authenticated
  };
};

export default connect(mapStateToProps)(LeftNavbar);
