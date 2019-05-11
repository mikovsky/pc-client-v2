import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./components/App";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import LogoutPage from "./components/auth/LogoutPage";
import Dashboard from "./components/dashboard/Dashboard";
import Wallet from "./components/wallet/Wallet";

export default () => {
  return (
    <Router>
      <App>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/logout" component={LogoutPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/wallet" component={Wallet} />
      </App>
    </Router>
  );
};
