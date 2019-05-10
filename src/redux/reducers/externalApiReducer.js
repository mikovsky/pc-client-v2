import { FETCH_TOP_100_COINS } from "../types";

const INITIAL_STATE = {
  top100Coins: [],
  coin: {},
  events: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TOP_100_COINS:
      return {
        ...state,
        top100Coins: action.payload
      };
    default:
      return state;
  }
};
