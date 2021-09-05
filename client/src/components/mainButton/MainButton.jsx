import "./mainButton.css";

function MainButton({ onClickHandler, buttonText }) {
  return (
    <button className="main-button global-box-shadow" onClick={onClickHandler}>
      {buttonText}
    </button>
  );
}

export default MainButton;
