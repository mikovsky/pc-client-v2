import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto mt-5 pb-5">
            <div className="card card-signin">
              <div className="card-body">
                <h5 className="card-title text-center text-light">
                  Welcome to the{" "}
                  <u>
                    <b>Profit-Coin</b>
                  </u>{" "}
                  Web Application
                </h5>
                <h6 className="card-title text-center text-light">
                  To start using our app, log in to your existing account or
                  create a new one
                </h6>
                <div className="form-signin">
                  <Link
                    to="/login"
                    className="btn btn-lg btn-outline-warning btn-block"
                  >
                    Log In
                  </Link>
                  <hr className="my-4 hr-color" />
                  <Link
                    to="/register"
                    className="btn btn-lg btn-outline-warning btn-block"
                  >
                    Create New Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
