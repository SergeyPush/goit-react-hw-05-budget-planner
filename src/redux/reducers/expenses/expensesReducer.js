import * as types from "./expensesTypes";

const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_EXPENSE:
      return [...state, action.payload];
    case types.REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== action.payload);
    default:
      return state;
  }
};

export default expensesReducer;
