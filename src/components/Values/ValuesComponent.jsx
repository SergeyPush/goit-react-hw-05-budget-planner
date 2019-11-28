import React from "react";
import { connect } from "react-redux";
import Values from "./Values";

import * as expensesSelector from "../../redux/reducers/expenses/expensesSelector";

const ValuesComponent = props => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Values {...props} />;
};

const mapStateToProps = state => {
  return {
    budget: expensesSelector.getBudget(state),
    expenses: expensesSelector.getExpenses(state),
    balance: expensesSelector.getBalance(state)
  };
};
export default connect(mapStateToProps)(ValuesComponent);
