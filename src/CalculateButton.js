const CalculateButton = ({ onClick }) => {
  return (
    <button className="button" onClick={() => onClick("calc")}>
      Calculate!
    </button>
  );
};

export default CalculateButton;
