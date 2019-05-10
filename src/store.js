import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./redux/reducers";

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
  reducers,
  {
    authReducer: { authenticated: localStorage.getItem("token") }
  },
  compose(
    applyMiddleware(reduxThunk),
    ReactReduxDevTools
  )
);
