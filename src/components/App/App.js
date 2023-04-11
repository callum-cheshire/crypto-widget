import { useState, useEffect } from "react";
import downArrow from "../../assets/down-arrow.svg";
import refresh from "../../assets/refresh.svg";
import axios from "axios";
import CoinInfo from "../CoinInfo";
import CoinSelector from "../CoinSelector";
import CurrencySelector from "../CurrencySelector";
import "./App.css";

function App() {
  const [selectedCoin, setSelectedCoin] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [coinData, setCoinData] = useState("");

  const fetchCoinData = async (coin, currency) => {
    try {
      const response = await axios.get(
        `https://api.coinpaprika.com/v1/tickers/${coin}?quotes=${currency}`
      );
      setCoinData(response.data);
      // Code to handle the fetched data will be placed here
    } catch (error) {
      console.error("Error fetching coin data:", error);
    }
  };

  useEffect((selectedCoin, selectedCurrency) => {
    const savedCoin = localStorage.getItem("selectedCoin");
    const savedCurrency = localStorage.getItem("selectedCurrency");

    if (savedCoin) {
      setSelectedCoin(savedCoin);
    } else {
      setSelectedCoin("eth")
    }
    if (savedCurrency) {
      setSelectedCurrency(savedCurrency);
    }

    fetchCoinData(selectedCoin, selectedCurrency);
  }, []);

  return (
    <div className="App">
      {/* <img src={downArrow} alt=""></img>
      <img src={refresh} alt=""></img> */}
      <CoinSelector />
      <CoinInfo />
      <CurrencySelector />
    </div>
  );
}

export default App;
