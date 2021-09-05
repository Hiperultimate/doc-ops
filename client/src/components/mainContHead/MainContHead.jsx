import "./mainContHead.css";

function MainContHead({ titleName }) {
  return (
    <div className="heading-bg added-item">
      <span className="main-cont-head global-box-shadow">{titleName}</span>
    </div>
  );
}

export default MainContHead;
