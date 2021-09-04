import "./mainContHead.css";

function MainContHead({ titleName }) {
  return (
    <div class="heading-bg added-item">
      <span className="main-cont-head global-box-shadow">{titleName}</span>
    </div>
  );
}

export default MainContHead;
