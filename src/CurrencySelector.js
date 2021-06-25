const CurrencySelector = ({
  currencyList,
  onChange,
  selectorValue,
  title,
  baseOrEnd,
  id,
}) => {
  const currencies = Object.keys(currencyList).map((currency) => (
    <option value={currency}>{currency}</option>
  ));

  return (
    <div className="inputCard" id={id}>
      <label className="label">{title}</label>
      <select
        className="input"
        onChange={(e) => onChange(baseOrEnd, e.target.value)}
        value={selectorValue}
        placeholder="Select currency"
      >
        <option selected disabled hidden>
          Select Currency
        </option>
        {currencies}
      </select>
    </div>
  );
};

export default CurrencySelector;
