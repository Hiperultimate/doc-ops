import "./mainContainer.css";

/* 
    add className="added-item" to components which are being added to 
    the MainContainer component for it to follow the styling rules
    automatically.
*/

function MainContainer({
  AddComponents,
  mainContainerStyle,
  mainWrapperClass,
}) {
  return (
    <div className={mainWrapperClass}>
      <div
        className="back-board global-box-shadow"
        style={mainContainerStyle ? mainContainerStyle : {}}
      >
        {AddComponents ? (
          AddComponents.map((items) => {
            return items;
          })
        ) : (
          <div className="empty-main-container"></div>
        )}
        {/* <div className="added-item">Main Container</div>  This is an example*/}
      </div>
    </div>
  );
}

export default MainContainer;
