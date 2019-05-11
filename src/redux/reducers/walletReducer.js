import { GET_COINS } from "../types";

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
    default:
      return state;
  }
};
