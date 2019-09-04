import React, { Component } from "react";
import axios from "axios";
import Currency from "../currency/Currency";
import "./home.styles.scss";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
      currency: "USD",
      result: 0,
      symbol: null
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
      .get("https://blockchain.info/ticker")
      .then(response => {
        this.setState({
          result: response.data[this.state.currency].last * [this.state.amount],
          symbol: response.data[this.state.currency].symbol
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div id="home">
        <h1 className="title">
          The <span>Bitcoin</span> currency converter
        </h1>
        <div className="info-container">
          <h4>Enter Your Information</h4>
          <form>
            <label>Amount of BitCoin</label>
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
            <h3>Your BitCoin is worth</h3>
            <h2>
              {this.state.symbol} {this.state.result.toFixed(2)}
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
