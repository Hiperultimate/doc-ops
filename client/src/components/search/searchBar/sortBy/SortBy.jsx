import "./sortBy.css";

function SortBy({SortByState, SortState }) {
  const {setSortBy} = SortByState;
  const {SwitchSortOption} = SortState;

  const onClickNearest = () => {
    setSortBy("Nearest");
    SwitchSortOption(false);
  };

  const onClickLowest = () => {
    setSortBy("Lowest");
    SwitchSortOption(false);
  };
  
  return (
    <div className="sort-by-holder global-box-shadow">
      <ul className="sort-by-list">
        <li>
          <div onClick={onClickNearest} className="sort-by-items">
            Sort by Nearest
          </div>
        </li>
        <li>
          <div onClick={onClickLowest} className="sort-by-items">
            Sort by Lowest Cost
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SortBy;
