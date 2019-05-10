import axios from "axios";
import { AUTH_USER, GET_ERRORS, FETCH_TOP_100_COINS } from "../types";
import { BACKEND_URL } from "../../config";
import { setAuthorizationToken } from "../../utils/setAuthorizationToken";

/* ---=== AUTH ACTIONS ===--- */
export const login = (formProps, callback) => async dispatch => {
  await axios
    .post(BACKEND_URL + "/api/auth/login", formProps)
    .then(res => {
      const { token } = res.data;
      dispatch({
        type: AUTH_USER,
        payload: token
      });
      dispatchErrorsCleanUp(dispatch);
      localStorage.setItem("token", token);
      setAuthorizationToken(token);
      callback();
    })
    .catch(err => {
      handleErrorsFromHttpCall(err, dispatch);
    });
};

export const register = (formProps, callback) => async dispatch => {
  await axios
    .post(BACKEND_URL + "/api/auth/register", formProps)
    .then(res => {
      dispatchErrorsCleanUp(dispatch);
      callback();
    })
    .catch(err => {
      handleErrorsFromHttpCall(err, dispatch);
    });
};

export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: AUTH_USER,
    payload: ""
  };
};
/* ---=== END OF AUTH ACTIONS ===--- */

/* ---=== EXTERNAL API ACTIONS ===--- */
export const fetchTop100Coins = () => async dispatch => {
  await axios
    .get(BACKEND_URL + "/resourcesApi/top100Coins")
    .then(res => {
      dispatch({
        type: FETCH_TOP_100_COINS,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err.response);
    });
};
/* ---=== END OF EXTERNAL API ACTIONS ===--- */

/* ---=== UTILS ===--- */
/*
	Cleaning up errors after successful login or registration.
	This function is being called in specific redux actions (e.g. login, register)
	This function receives dispatch from login or register actions as a parameter
*/
export const dispatchErrorsCleanUp = async dispatch => {
  dispatch({
    type: GET_ERRORS,
    payload: {}
  });
};

/*
	Cleaning up errors from reducer state while switching between login and register page.
	This function is being called directly from component in componentDidMount method
*/
export const cleanUpErrorsOnSwitchingForms = () => dispatch => {
  dispatch({
    type: GET_ERRORS,
    payload: {}
  });
};

export const handleErrorsFromHttpCall = async (error, dispatch) => {
  if (error.response) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  } else {
    dispatch({
      type: GET_ERRORS,
      payload: { serverError: "Server not responding" }
    });
  }
};
/* ---=== END OF UTILS ===--- */
