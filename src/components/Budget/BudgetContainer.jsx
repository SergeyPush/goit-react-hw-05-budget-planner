import { connect } from "react-redux";

import BudgetForm from "./BudgetForm";
import * as budgetActions from "../../redux/budget/budgetActions";

const mapDispatchToProps = dispatch => {
  return {
    onSave: value => dispatch(budgetActions.setBudget(value))
  };
};

export default connect(null, mapDispatchToProps)(BudgetForm);
