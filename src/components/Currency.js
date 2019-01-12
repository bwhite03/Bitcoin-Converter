import React, { Component } from "react";

class Currency extends Component {
  render() {
    return (
      <div>
        <label>Currency</label>
        <select
          onChange={this.props.onCurrencyChange}
          value={this.props.globalState.currency}
        >
          <option value="USD">United States Dollar</option>
          <option value="EUR">Euro</option>
          <option value="JPY">Japanese Yen</option>
          <option value="GBP">British Pound</option>
          <option value="CHF">Swiss Franc</option>
        </select>
      </div>
    );
  }
}

export default Currency;
