import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./components/App";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import LogoutPage from "./components/auth/LogoutPage";
import Dashboard from "./components/dashboard/Dashboard";
import Wallet from "./components/wallet/Wallet";
import AddCoin from "./components/wallet/AddCoin";
import UpdateCoin from "./components/wallet/UpdateCoin";
import News from "./components/news/News";
import SecuredRoute from "./utils/SecuredRoute";
import PageNotFound from "./components/PageNotFound";

export default () => {
  return (
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/logout" component={LogoutPage} />
          <SecuredRoute exact path="/dashboard" component={Dashboard} />
          <SecuredRoute exact path="/wallet" component={Wallet} />
          <SecuredRoute exact path="/wallet/addCoin" component={AddCoin} />
          <SecuredRoute
            exact
            path="/wallet/updateCoin/:ownershipCode"
            component={UpdateCoin}
          />
          <SecuredRoute exact path="/news" component={News} />
          <Route component={PageNotFound} />
        </Switch>
      </App>
    </Router>
  );
};
