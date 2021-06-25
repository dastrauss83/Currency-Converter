import "./App.css";
import Header from "./Header";
import ConverterCard from "./ConverterCard";
import { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [fxrates, setFxrates] = useState();
  const [baseCurrency, setBaseCurrency] = useState();
  const [endCurrency, setEndCurrency] = useState();
  const [amount, setAmount] = useState("");
  const [calc, setCalc] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://api.exchangerate.host/latest")
      .then((vals) => vals.json())
      .then((json) => {
        setFxrates(json);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (amount && baseCurrency && endCurrency) {
  //     const newCalc =
  //       Math.round(
  //         (amount / fxrates.rates[baseCurrency]) *
  //           fxrates.rates[endCurrency] *
  //           100
  //       ) / 100;
  //     setCalc(newCalc);
  //   }
  // }, [amount, baseCurrency, endCurrency, fxrates]);

  const handleChange = (type, value) => {
    setCalc("");

    if (type === "base") {
      setBaseCurrency(value);
    } else if (type === "end") {
      setEndCurrency(value);
    } else if (type === "amount") {
      setAmount(value);
    }
  };

  const handleClick = (type) => {
    if (type === "calc") {
      const newCalc =
        Math.round(
          (amount / fxrates.rates[baseCurrency]) *
            fxrates.rates[endCurrency] *
            100
        ) / 100;
      setCalc(newCalc);
    } else if (type === "swap") {
      setCalc("");
      setBaseCurrency(endCurrency);
      setEndCurrency(baseCurrency);
    }
  };

  if (loading || !fxrates) return null; // loading state

  return (
    <div className="Body">
      <Header value={fxrates.date} />
      <ConverterCard
        currencyList={fxrates.rates}
        onChange={handleChange}
        amount={amount}
        baseCurrency={baseCurrency}
        endCurrency={endCurrency}
        calc={calc}
        onClick={handleClick}
      />
    </div>
  );
};

export default App;
