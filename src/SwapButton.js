const SwapButton = ({ onClick }) => {
  return (
    <button className="button" id="swap" onClick={() => onClick("swap")}>
      Swap
    </button>
  );
};

export default SwapButton;

// import swapImage from "./swapImage.jpeg";
// <img src={swapImage} alt="" />
