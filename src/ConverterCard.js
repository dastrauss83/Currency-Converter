import CurrencySelector from "./CurrencySelector";
import EnterCurrency from "./EnterCurrency";
import CalculateButton from "./CalculateButton";
import SwapButton from "./SwapButton";
import Result from "./Result";

const ConverterCard = ({
  currencyList,
  onChange,
  amount,
  baseCurrency,
  endCurrency,
  calc,
  onClick,
}) => {
  return (
    <div className="card">
      <div className="inputsSection">
        <EnterCurrency onChange={onChange} />
        <CurrencySelector
          id="currencyOne"
          title="Starting Currency"
          baseOrEnd="base"
          selectorValue={baseCurrency}
          currencyList={currencyList}
          onChange={onChange}
        />
        <SwapButton onClick={onClick} />
        <CurrencySelector
          id="currencyTwo"
          title="Ending Currency"
          baseOrEnd="end"
          selectorValue={endCurrency}
          currencyList={currencyList}
          onChange={onChange}
        />
      </div>
      <CalculateButton onClick={onClick} />
      <Result
        amount={amount}
        baseCurrency={baseCurrency}
        endCurrency={endCurrency}
        calc={calc}
      />
    </div>
  );
};

export default ConverterCard;

/* <Currency2
  currencyList={currencyList}
  onChange={onChange}
  endCurrency={endCurrency}
/> */
