import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const SecuredRoute = ({
  component: Component,
  authenticated,
  ...otherProps
}) => (
  <Route
    {...otherProps}
    render={props =>
      authenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = state => ({
  authenticated: state.authReducer.authenticated
});

export default connect(mapStateToProps)(SecuredRoute);
