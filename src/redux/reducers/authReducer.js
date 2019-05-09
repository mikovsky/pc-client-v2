import { AUTH_USER } from "../types";

const INITIAL_STATE = {
  authenticated: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: action.payload
      };
    default:
      return state;
  }
};
