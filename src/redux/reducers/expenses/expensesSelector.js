export const getBudget = state => {
  return state.budget;
};

export const getExpensesList = state => state.expenses;

export const getExpenses = state => {
  return state.expenses.reduce((acc, expense) => {
    return acc + Number(expense.amount);
  }, 0);
};

export const getBalance = state => {
  return getBudget(state) - getExpenses(state);
};
