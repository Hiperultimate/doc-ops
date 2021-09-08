import "./mainButton.css";
import Arrow from "../../svgs/search-arrow.svg";

function MainButton({ onClickHandler, buttonText , btnStyle, arrow }) {
  return (
    <button className="main-button global-box-shadow" style={btnStyle} onClick={onClickHandler}>
      {buttonText}
      {arrow && <img src={Arrow} className="btn-arrow" alt="arrow" />}
    </button>
  );
}

export default MainButton;
