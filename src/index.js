import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import routes from "./routes";
import store from "./store";
import { setAuthorizationToken } from "./utils/setAuthorizationToken";

setAuthorizationToken(localStorage.getItem("token"));

ReactDOM.render(
  <Provider store={store}>{routes()}</Provider>,
  document.querySelector("#root")
);
