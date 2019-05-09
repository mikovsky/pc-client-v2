import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  formReducer,
  authReducer,
  errorReducer
});
