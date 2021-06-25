const EnterCurrency = ({ onChange }) => {
  return (
    <div className="inputCard">
      <label className="label">Amount</label>
      <input
        className="input"
        type="number"
        placeholder="ex. 100"
        onChange={(e) => onChange("amount", e.target.value)}
      />
    </div>
  );
};
export default EnterCurrency;
