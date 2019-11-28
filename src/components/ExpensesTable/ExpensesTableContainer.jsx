import React from "react";
import { connect } from "react-redux";
import T from "prop-types";
import ExpensesTable from "./ExpensesTable";

import * as expensesActions from "../../redux/reducers/expenses/expensesActions";
import * as expensesSelector from "../../redux/reducers/expenses/expensesSelector";

const ExpensesTableContainer = ({ items, onRemove }) => {
  return <ExpensesTable items={items} onRemove={onRemove} />;
};

ExpensesTableContainer.propTypes = {
  items: T.arrayOf(T.any).isRequired,
  onRemove: T.func.isRequired
};

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpensesTableContainer);
