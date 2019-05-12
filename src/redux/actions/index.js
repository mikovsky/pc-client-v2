import axios from "axios";
import {
  AUTH_USER,
  GET_ERRORS,
  FETCH_TOP_100_COINS,
  GET_COINS,
  FETCH_COIN,
  DELETE_COIN,
  FETCH_EVENTS,
  FETCH_COIN_HISTORY,
  SELECT_COIN
} from "../types";
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
      dispatchErrorsCleanUp(dispatch);
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: { errorMessage: "Failed to load data from external server" }
      });
    });
};

export const fetchEvents = () => async dispatch => {
  await axios
    .get(BACKEND_URL + "/resourcesApi/events")
    .then(res => {
      dispatch({
        type: FETCH_EVENTS,
        payload: res.data.body
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: { errorMessage: "Failed to load data from external server" }
      });
    });
};

export const fetchCoinHistory = coinCode => async dispatch => {
  await axios
    .get(BACKEND_URL + `/resourcesApi/history/${coinCode}`)
    .then(res => {
      dispatch({
        type: FETCH_COIN_HISTORY,
        payload: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_COIN_HISTORY,
        payload: {}
      });
    });
};
/* ---=== END OF EXTERNAL API ACTIONS ===--- */

/* ---=== INTERNAL REST API ACTIONS ===--- */
export const getCoins = () => async dispatch => {
  await axios
    .get(BACKEND_URL + "/api/wallet")
    .then(res => {
      dispatch({
        type: GET_COINS,
        payload: res.data
      });
      dispatchErrorsCleanUp(dispatch);
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: { errorMessage: "Failed to load coins from internal server" }
      });
    });
};

export const fetchCoin = ownershipCode => async dispatch => {
  await axios
    .get(BACKEND_URL + `/api/wallet/${ownershipCode}`)
    .then(res => {
      dispatch({
        type: FETCH_COIN,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: { errorMessage: "Failed to load coins from internal server" }
      });
    });
};

const validateAddAndUpdateCoin = (formProps, dispatch) => {
  return (
    greaterThanZero(formProps, dispatch) &&
    maxDecimalPlaces(formProps, dispatch)
  );
};

const greaterThanZero = (formProps, dispatch) => {
  let isValid = true;
  if (formProps.amount === "0" && formProps.priceWhenBought === "0") {
    dispatch({
      type: GET_ERRORS,
      payload: {
        amount: "Amount must be greater than 0",
        priceWhenBought: "Price when coin was bought must be greater than 0"
      }
    });
    isValid = false;
  } else if (formProps.priceWhenBought === "0") {
    dispatch({
      type: GET_ERRORS,
      payload: {
        priceWhenBought: "Price when coin was bought must be greater than 0"
      }
    });
    isValid = false;
  } else if (formProps.amount === "0") {
    dispatch({
      type: GET_ERRORS,
      payload: {
        amount: "Amount must be greater than 0"
      }
    });
    isValid = false;
  }
  return isValid;
};

const maxDecimalPlaces = (formProps, dispatch) => {
  let isValid = true;
  if (
    parseFloat(formProps.amount) < 0.00001 &&
    parseFloat(formProps.priceWhenBought) < 0.00001
  ) {
    dispatch({
      type: GET_ERRORS,
      payload: {
        amount: "Amount can have only 5 decimal places",
        priceWhenBought:
          "Price when coin was bought can have only 5 decimal places"
      }
    });
    isValid = false;
  } else if (parseFloat(formProps.amount) < 0.00001) {
    dispatch({
      type: GET_ERRORS,
      payload: {
        amount: "Amount can have only 5 decimal places"
      }
    });
    isValid = false;
  } else if (parseFloat(formProps.priceWhenBought) < 0.00001) {
    dispatch({
      type: GET_ERRORS,
      payload: {
        priceWhenBought:
          "Price when coin was bought can have only 5 decimal places"
      }
    });
    isValid = false;
  }

  return isValid;
};

export const addCoin = (formProps, callback) => async dispatch => {
  dispatchErrorsCleanUp(dispatch);
  if (validateAddAndUpdateCoin(formProps, dispatch)) {
    await axios
      .post(BACKEND_URL + "/api/wallet", formProps)
      .then(res => {
        dispatchErrorsCleanUp(dispatch);
        callback();
      })
      .catch(err => {
        handleErrorsFromHttpCall(err, dispatch);
      });
  }
};

export const updateCoin = (formProps, callback) => async dispatch => {
  if (validateAddAndUpdateCoin(formProps, dispatch)) {
    await axios
      .patch(BACKEND_URL + `/api/wallet/${formProps.ownershipCode}`, formProps)
      .then(res => {
        dispatchErrorsCleanUp(dispatch);
        callback();
      })
      .catch(err => {
        handleErrorsFromHttpCall(err, dispatch);
      });
  }
};

export const deleteCoin = ownershipCode => async dispatch => {
  if (window.confirm("Are you sure?")) {
    await axios.delete(BACKEND_URL + `/api/wallet/${ownershipCode}`);

    dispatch({
      type: DELETE_COIN,
      payload: ownershipCode
    });
  }
};
/* ---=== END OF INTERNAL REST API ACTIONS ===--- */

/* ---=== CHART ACTIONS ===--- */
export const selectCoin = coin => dispatch => {
  dispatch({
    type: SELECT_COIN,
    payload: coin
  });
};
/* ---=== END OF CHART ACTIONS ===--- */

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
