import React, { Component } from "react";
import axios from "axios";
import Currency from "../currency/Currency";

class Cash extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
      currency: "USD",
      result: 0
    };
  }

  onNumberChange = e => {
    this.setState({
      amount: e.target.value
    });
  };

  onCurrencyChange = e => {
    this.setState({
      currency: e.target.value
    });
  };

  calculate = e => {
    e.preventDefault();
    axios
      .get(
        `https://blockchain.info/tobtc?currency=${this.state.currency}&value=${this.state.amount}`
      )
      .then(response => {
        this.setState({
          result: response.data
        });
      })
      .catch(error => {
        throw error;
      });
  };
  render() {
    return (
      <div id="home">
        <h1 className="title">
          The <span>Currency</span> Bitcoin converter
        </h1>
        <div className="info-container">
          <h4>Enter Your Information</h4>
          <form>
            <label>Amount of Currency</label>
            <input
              type="number"
              min="0"
              onChange={this.onNumberChange}
              value={this.state.amount}
            />
            <Currency
              globalState={this.state}
              onCurrencyChange={this.onCurrencyChange}
            />
            <button onClick={this.calculate}>Convert</button>
          </form>
          <div className="result">
            <h3>Your Currency is worth</h3>
            <h2>{this.state.result.toFixed(2)} Ƀ</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Cash;
