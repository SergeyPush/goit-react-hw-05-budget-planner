import React, { Component } from "react";
import T from "prop-types";

import Form from "../shared/Form";
import Label from "../shared/Label";
import Input from "../shared/Input";
import Button from "../shared/Button";

const labelStyles = `
  margin-bottom: 16px;  
`;

class BudgetForm extends Component {
  static propTypes = {
    onSave: T.func.isRequired
  };

  state = {
    budget: ""
  };

  handleChange = e => {
    this.setState({
      budget: Number(e.target.value)
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { budget } = this.state;

    if (!budget) {
      return;
    }

    this.props.onSave(budget);
    this.setState({ budget: "" });
  };

  render() {
    const { budget } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input type="number" value={budget} onChange={this.handleChange} />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}
export default BudgetForm;
