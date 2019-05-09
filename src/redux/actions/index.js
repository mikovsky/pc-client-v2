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
    localStorage.setItem("token", res.data.token);
    callback();
  } catch (e) {
    dispatch({
      type: GET_ERRORS,
      payload: e.response.data
    });
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: AUTH_USER,
    payload: ""
  };
};
