import {
  FETCH_TOP_100_COINS,
  FETCH_EVENTS,
  FETCH_COIN_HISTORY
} from "../types";

const INITIAL_STATE = {
  top100Coins: [],
  coinHistory: [],
  events: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TOP_100_COINS:
      return {
        ...state,
        top100Coins: action.payload
      };
    case FETCH_EVENTS:
      return {
        ...state,
        events: action.payload
      };
    case FETCH_COIN_HISTORY:
      return {
        ...state,
        coinHistory: action.payload
      };
    default:
      return state;
  }
};
