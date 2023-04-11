import { useState, React } from "react";
import "./CurrencySelector.css";

const CurrencySelector = ({ selectedCurrency, onCurrencyChange }) => {
    const [selectedOption, setSelectedOption] = useState(() => {
      return selectedCurrency === "USD" ? "option1" : "option2";
    });
  
    const handleOption1Click = () => {
      setSelectedOption('option1');
      onCurrencyChange("USD");
    };
  
    const handleOption2Click = () => {
      setSelectedOption('option2');
      onCurrencyChange("GBP");
    };

  return (
    <div
    className="container"
      value={selectedCurrency}
      onChange={(e) => onCurrencyChange(e.target.value)}
    >
      <button value="USD" className={selectedOption === 'option1' ? 'selected1' : ''}
        onClick={handleOption1Click}>USD</button>
      <button value="GBP" 
      className={selectedOption === 'option2' ? 'selected2' : ''}
        onClick={handleOption2Click}>GBP</button>
    </div>
  );
};

export default CurrencySelector;
