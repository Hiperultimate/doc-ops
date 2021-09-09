import "./sortBy.css";

function SortBy() {
  const onClickHandler = () => {
    console.log("handle sort by");
  };
  
  return (
    <div className="sort-by-holder global-box-shadow">
      <ul className="sort-by-list">
        <li>
          <div onClick={onClickHandler} className="sort-by-items">
            Sort by Nearest
          </div>
        </li>
        <li>
          <div onClick={onClickHandler} className="sort-by-items">
            Sort by Lowest Cost
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SortBy;
