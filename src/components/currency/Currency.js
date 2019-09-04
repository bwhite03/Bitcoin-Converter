import React from "react";

const Currency = ({ onCurrencyChange, globalState }) => {
  return (
    <div>
      <label>Currency</label>
      <select onChange={onCurrencyChange} value={globalState.currency}>
        <option value="USD">United States Dollar</option>
        <option value="EUR">Euro</option>
        <option value="JPY">Japanese Yen</option>
        <option value="GBP">British Pound</option>
        <option value="CHF">Swiss Franc</option>
      </select>
    </div>
  );
};

export default Currency;
