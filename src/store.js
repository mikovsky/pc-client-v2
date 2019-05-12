import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./redux/reducers";

export default createStore(
  reducers,
  {
    authReducer: { authenticated: localStorage.getItem("token") }
  },
  compose(applyMiddleware(reduxThunk))
);
