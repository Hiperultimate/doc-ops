import "./mainContainer.css";

/* 
    add className="added-item" to components which are being added to 
    the MainContainer component for it to follow the styling rules
    automatically.
*/

function MainContainer(props){
    return(
        <div className="back-board global-box-shadow">
            {props.AddComponents.map((items)=> {    // item = <Component titlename={"Value"} />
                return(items);
            })}
            <div className="added-item">Main Container</div>
        </div>
    );
}

export default MainContainer;