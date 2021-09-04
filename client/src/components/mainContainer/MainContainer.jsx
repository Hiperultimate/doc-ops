import "./mainContainer.css";
import MainContHead from "../mainContHead/MainContHead.jsx";

/* 
    add className="added-item" to components which are being added to 
    the MainContainer component for it to follow the styling rules
    automatically.
*/

function MainContainer(){
    return(
        <div className="back-board global-box-shadow">
            <MainContHead titleName="Checking out" />
            <MainContHead titleName="Checking in" />
            <MainContHead titleName="Bruh" />
            <MainContHead titleName="Moment" />
            <div className="added-item">Main Container</div>
            <div className="added-item">Main Container</div>
            <div className="added-item">Main Container</div>
            <div className="added-item">Main Container</div>
        </div>
    );
}

export default MainContainer;