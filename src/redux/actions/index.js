import axios from "axios";
import { AUTH_USER, GET_ERRORS } from "../types";
import { BACKEND_URL } from "../../config";

export const login = (formProps, callback) => async dispatch => {
  try {
    const res = await axios.post(BACKEND_URL + "/api/auth/login", formProps);
    dispatch({
      type: AUTH_USER,
      payload: res.data.token
    });
    dispatchErrorsCleanUp(dispatch);
    localStorage.setItem("token", res.data.token);
    callback();
  } catch (e) {
    handleErrorsFromHttpCall(e, dispatch);
  }
};

export const register = (formProps, callback) => async dispatch => {
  try {
    await axios.post(BACKEND_URL + "/api/auth/register", formProps);
    dispatchErrorsCleanUp(dispatch);
    callback();
  } catch (e) {
    handleErrorsFromHttpCall(e, dispatch);
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: AUTH_USER,
    payload: ""
  };
};

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
