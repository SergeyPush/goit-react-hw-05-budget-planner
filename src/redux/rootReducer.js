import { combineReducers } from "redux";
import budgetReducer from "./budget/budgetReducer";
import expensesReducer from "./expenses/expensesReducer";

export default combineReducers({
  budget: budgetReducer,
  expenses: expensesReducer
});
