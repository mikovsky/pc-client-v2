import { GET_COINS, FETCH_COIN } from "../types";

const INITIAL_STATE = {
  walletCoins: [],
  walletCoin: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COINS:
      return {
        ...state,
        walletCoins: action.payload
      };
    case FETCH_COIN:
      return {
        ...state,
        walletCoin: action.payload
      };
    default:
      return state;
  }
};
