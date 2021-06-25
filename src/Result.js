const Result = ({ amount, baseCurrency, endCurrency, calc }) => {
  const resultLine = () => {
    if (
      amount === "" ||
      baseCurrency === "" ||
      endCurrency === "" ||
      calc === ""
    ) {
      return <div className="result"> Fill inputs and click Calculate!</div>;
    } else {
      return (
        <div className="result">
          {amount} {baseCurrency} = {calc} {endCurrency}
        </div>
      );
    }
  };

  return <div>{resultLine()}</div>;
};

export default Result;
