import React from "react";
import T from "prop-types";

import { connect } from "react-redux";
import ExpensesForm from "./ExpenseForm";

import * as expensesActions from "../../redux/reducers/expenses/expensesActions";

const ExpensesFormContainer = ({ onSave }) => {
  return <ExpensesForm onSave={onSave} />;
};

ExpensesFormContainer.propTypes = {
  onSave: T.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onSave: value => dispatch(expensesActions.addExpense(value))
  };
};
export default connect(null, mapDispatchToProps)(ExpensesFormContainer);
