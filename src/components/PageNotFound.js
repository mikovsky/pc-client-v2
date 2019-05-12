import React, { Component } from "react";

class PageNotFound extends Component {
  componentDidMount() {
    setTimeout(() => this.props.history.push("/dashboard"), 5000);
  }
  render() {
    return (
      <div className="alert alert-warning mt-5" role="alert">
        <h4 className="alert-heading">Ups!</h4>
        <p>Page not found!</p>
        <hr />
        <p className="mb-0">
          You will be redirect to Home Page in 5 seconds...
        </p>
      </div>
    );
  }
}

export default PageNotFound;
