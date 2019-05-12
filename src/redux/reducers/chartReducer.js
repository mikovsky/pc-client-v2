import { SELECT_COIN } from "../types";

const INITIAL_STATE = {
  selectedCoin: { id: "bitcoin", name: "Bitcoin" }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_COIN:
      return {
        ...state,
        selectedCoin: action.payload
      };
    default:
      return state;
  }
};
