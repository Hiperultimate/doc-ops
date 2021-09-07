import "./mainHeading.css";

function MainHeading({ titleName }) {
  return (
    <div className="title-container">
      <div className="to-follow">
        <span className="page-title">{titleName}</span>
      </div>
    </div>
  );
}

export default MainHeading;
