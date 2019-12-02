import { connect } from "react-redux";
import Values from "./Values";

import * as expensesSelector from "../../redux/expenses/expensesSelector";
import * as budgetSelector from "../../redux/budget/budgetSelectors";

const mapStateToProps = state => {
  return {
    budget: budgetSelector.getBudget(state),
    expenses: expensesSelector.getExpenses(state),
    balance: expensesSelector.getBalance(state)
  };
};
export default connect(mapStateToProps)(Values);
