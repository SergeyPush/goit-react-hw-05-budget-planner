import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import T from "prop-types";
import BudgetForm from "./Budget";
import ExpenseForm from "./ExpensesForm";
import ExpensesTable from "./ExpensesTable";
import Values from "./Values";
import * as expensesSelector from "../redux/reducers/expenses/expensesSelector";

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const App = ({ expenses }) => {
  return (
    <Container>
      <BudgetForm />
      <Values />
      <ExpenseForm />
      {expenses.length > 0 && <ExpensesTable />}
    </Container>
  );
};

App.propTypes = {
  expenses: T.arrayOf(T.shape()).isRequired
};
const mapStateToProps = state => {
  return {
    expenses: expensesSelector.getExpensesList(state)
  };
};

export default connect(mapStateToProps)(App);
