import React, { Component } from "react";
import PropTypes from "prop-types";
import DisplayChild from "./DisplayChild";

class Display extends Component {

  calculateMonthlyRepayment = () => {
    const { amount, years ,interest } = this.props;

  
    const totalOwed = (amount*years*interest)/(100);
        const monthlyRepayment =(totalOwed+amount) / (years*12);

    return <p>Rs{Math.round(monthlyRepayment)}</p>;
  };

  
  render() {
    return (
      <div className="flex">
        <DisplayChild  style={{color:"#3b123b"}}
          func={this.calculateMonthlyRepayment()}
          text=" monthly repayment"
        />
      </div>
    );
  }
}

Display.propTypes = {
  years: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
};

export default Display;