import React from "react";
import "./CoinSelector.css"

const CoinSelector = ({ selectedCoin, onCoinChange }) => {
  return (
    <select className="select-wrapper" value={selectedCoin} onChange={(e) => onCoinChange(e.target.value)}>
      <option value="btc-bitcoin">BITCOIN - BTC</option>
      <option value="eth-ethereum">ETHEREUM - ETH</option>
    </select>
  );
};

export default CoinSelector;
