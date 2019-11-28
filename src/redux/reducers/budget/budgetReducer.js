import * as types from "./budgetTypes";

const budgetReducer = (state = 0, action) => {
  switch (action.type) {
    case types.SET_BUDGET:
      return action.payload;
    default:
      return state;
  }
};

export default budgetReducer;
