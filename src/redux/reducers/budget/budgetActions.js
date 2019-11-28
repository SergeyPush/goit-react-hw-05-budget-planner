import * as types from "./budgetTypes";

export const setBudget = value => {
  return {
    type: types.SET_BUDGET,
    payload: value
  };
};
