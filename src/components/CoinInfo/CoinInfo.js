import React from "react";
import "./CoinInfo.css"

const CoinInfo = ({ coinData, selectedCurrency, onRefresh}) => {
  const currencyValue = coinData?.quotes?.[selectedCurrency]?.price;

  const roundedValue = currencyValue
    ? parseFloat(currencyValue).toFixed(2)
    : "N/A";

    const getCurrencySymbol = (currency) => {
      switch (currency) {
        case "USD":
          return "$";
        case "GBP":
          return "£";
        default:
          return "";
      }
    };

    const getCurrentCoin = (coinData) => {
      switch (coinData.name) {
        case "Ethereum":
          return "ETHEREUM - ETH";
        case "Bitcoin":
          return "BITCOIN - BTC";
        default:
          return "";
      }
    };

    const currencySymbol = getCurrencySymbol(selectedCurrency);
    const currentCoin = getCurrentCoin(coinData);

  return (
    <div className="coin-info">
    <div className="refresh-container">
      <button className="refresh-button" onClick={onRefresh}>
        </button>
    </div>
      <div className="info-container">
        <h3 className="current-coin">
          {currentCoin}
        </h3>
        <p className="current-value">
        {currencySymbol}
          {roundedValue} {selectedCurrency}
        </p>
      </div>
    </div>
  );
};

export default CoinInfo;
