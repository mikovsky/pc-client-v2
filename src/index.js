import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import routes from "./routes";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>{routes()}</Provider>,
  document.querySelector("#root")
);
