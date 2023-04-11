import { useState, useEffect } from "react";
import axios from "axios";
import CoinInfo from "../CoinInfo/CoinInfo";
import CoinSelector from "../CoinSelector/CoinSelector";
import CurrencySelector from "../CurrencySelector/CurrencySelector";
import "./App.css";

function App() {
  const [selectedCoin, setSelectedCoin] = useState(() => {
    const savedCoin = localStorage.getItem("selectedCoin");
    return savedCoin || "eth-ethereum";
  });
  const [selectedCurrency, setSelectedCurrency] = useState(() => {
    const savedCurrency = localStorage.getItem("selectedCurrency");
    return savedCurrency || "GBP";
  });
  const [coinData, setCoinData] = useState("");

  const fetchCoinData = async (selectedCoin, selectedCurrency) => {
    try {
      const response = await axios.get(
        `https://api.coinpaprika.com/v1/tickers/${selectedCoin}?quotes=${selectedCurrency}`
      );
      setCoinData(response.data);
    } catch (error) {
      console.error("Error fetching coin data:", error);
    }
  };

  const onCoinChange = (newCoin) => {
    // Update the selectedCoin state with the new selected coin value
    setSelectedCoin(newCoin);
  
    // Save the new selected coin value in local storage
    localStorage.setItem('selectedCoin', newCoin);
  
    // Fetch updated coin data based on the new selected coin and the current selected currency
    fetchCoinData(newCoin, selectedCurrency);
  };

  const onCurrencyChange = (newCurrency) => {
    setSelectedCurrency(newCurrency);
  
    localStorage.setItem('selectedCurrency', newCurrency);
  
    fetchCoinData(selectedCoin, newCurrency);
  }

  const handleRefresh = () => {
    fetchCoinData(selectedCoin, selectedCurrency);
  };

  useEffect(() => {
    fetchCoinData(selectedCoin, selectedCurrency);
  }, [selectedCoin, selectedCurrency]);

  return (
    <main className="App">
      <CoinSelector selectedCoin={selectedCoin} onCoinChange={onCoinChange}/>
      <CoinInfo coinData={coinData} selectedCurrency={selectedCurrency} onRefresh={handleRefresh}/>
      <CurrencySelector selectedCurrency={selectedCurrency} onCurrencyChange={onCurrencyChange}/>
    </main>
  );
}

export default App;
