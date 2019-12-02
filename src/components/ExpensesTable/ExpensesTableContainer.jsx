import { connect } from "react-redux";
import ExpensesTable from "./ExpensesTable";

import * as expensesActions from "../../redux/expenses/expensesActions";
import * as expensesSelector from "../../redux/expenses/expensesSelector";

const mapStateToProps = state => {
  return {
    items: expensesSelector.getExpensesList(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemove: id => dispatch(expensesActions.removeExpense(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
