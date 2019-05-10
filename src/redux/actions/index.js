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
    cleanUpErrors();
    localStorage.setItem("token", res.data.token);
    callback();
  } catch (e) {
    handleErrorsFromHttpCall(e, dispatch);
  }
};

export const register = (formProps, callback) => async dispatch => {
  try {
    await axios.post(BACKEND_URL + "/api/auth/register", formProps);
    cleanUpErrors();
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

export const cleanUpErrors = () => dispatch => {
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
