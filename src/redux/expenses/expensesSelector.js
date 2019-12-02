import { getBudget } from "../budget/budgetSelectors";

export const getExpensesList = state => state.expenses;

export const getExpenses = state => {
  return state.expenses.reduce((acc, expense) => {
    return acc + Number(expense.amount);
  }, 0);
};

export const getBalance = state => getBudget(state) - getExpenses(state);
