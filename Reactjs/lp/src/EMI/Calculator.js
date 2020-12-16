
import React, { Component } from "react";
import InputRange from "react-input-range";
import Display from "./Display";

import "react-input-range/lib/css/index.css";

class Calculator extends Component {
  state = {
    amountValue: 5000,
    yearsValue: 1,
    interestValue: 10
  };

  handleAmountChange = value => {
    this.setState({ amountValue: value });
  };
  handleYearChange = value => {
    this.setState({ yearsValue: value });
  };
  handleInterestChange = value => {
    this.setState({ interestValue: value });
  };

  render() {
    const { amountValue, yearsValue ,interestValue } = this.state;

    return (
      <div className="card  mt-5 col-md-6 offset-md-3">
      
        <h4 className="m-3"  style={{color:"#3b123b"}}>LoanAmount</h4>
        <InputRange  
          step={100}
          maxValue={1000000}
          minValue={1000}
          value={amountValue}
          onChange={this.handleAmountChange}
        />
        <h4 className="m-3"  style={{color:"#3b123b"}}>
        Duration
        </h4>
        <InputRange
          step={0.5}
          maxValue={5}
          minValue={1}
          value={yearsValue}
          onChange={this.handleYearChange}
        />
        <h4 className="m-3"  style={{color:"#3b123b"}}>
          Interest
        </h4>
<InputRange
          step={0.5}
          maxValue={15}
          minValue={10}
          value={interestValue}
          onChange={this.handleInterestChange}
        />
          <Display years={yearsValue} amount={amountValue} interest={interestValue} />

      </div>
    );
  }
}

export default Calculator;