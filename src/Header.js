const Header = ({ value }) => {
  return (
    <div className="header">
      <h1 className="title">Currency Converter</h1>
      <h3 className="subTitle">FX rates last updated on {value}</h3>
    </div>
  );
};

export default Header;
