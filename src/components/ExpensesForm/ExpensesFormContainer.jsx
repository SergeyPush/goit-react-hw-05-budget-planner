import { connect } from "react-redux";
import ExpensesForm from "./ExpenseForm";

import * as expensesActions from "../../redux/expenses/expensesActions";

const mapDispatchToProps = dispatch => {
  return {
    onSave: value => dispatch(expensesActions.addExpense(value))
  };
};
export default connect(null, mapDispatchToProps)(ExpensesForm);
