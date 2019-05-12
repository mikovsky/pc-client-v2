import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import externalApiReducer from "./externalApiReducer";
import walletReducer from "./walletReducer";
import chartReducer from "./chartReducer";

export default combineReducers({
  form: formReducer,
  authReducer,
  errorReducer,
  externalApiReducer,
  walletReducer,
  chartReducer
});
