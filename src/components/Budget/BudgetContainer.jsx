import React from "react";
import { connect } from "react-redux";
import T from "prop-types";

import BudgetForm from "./BudgetForm";
import * as budgetActions from "../../redux/reducers/budget/budgetActions";

const BudgetContainer = ({ onSave }) => {
  return <BudgetForm onSave={onSave} />;
};

BudgetContainer.propTypes = {
  onSave: T.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onSave: value => dispatch(budgetActions.setBudget(value))
  };
};

export default connect(null, mapDispatchToProps)(BudgetContainer);
