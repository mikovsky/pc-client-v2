import { GET_COINS, FETCH_COIN, DELETE_COIN } from "../types";

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
    case DELETE_COIN:
      return {
        ...state,
        walletCoins: state.walletCoins.filter(
          coin => coin.ownershipCode !== action.payload
        )
      };
    default:
      return state;
  }
};
