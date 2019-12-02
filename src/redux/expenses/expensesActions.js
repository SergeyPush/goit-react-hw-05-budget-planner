import shortid from "shortid";
import * as types from "./expensesTypes";

export const addExpense = value => {
  return {
    type: types.ADD_EXPENSE,
    payload: { ...value, id: shortid.generate() }
  };
};
export const removeExpense = id => {
  return {
    type: types.REMOVE_EXPENSE,
    payload: id
  };
};
