import "./filterSearch.css";
import Button from "../../mainButton/MainButton.jsx";

function FilterSearch({FilterState , SortState}) {
  const {FilterOption,SwitchFilterOption} = FilterState;
  const {SwitchSortOption} = SortState;

  const onClickHandler = () => {
    SwitchFilterOption(!FilterOption);
    SwitchSortOption(false);
  };
  return (
    <div className="filter-search-container">
      <Button
        onClickHandler={onClickHandler}
        buttonText={"Filter Search"}
        btnStyle={{ width: "200px" , padding: "0.5em", position: "relative", right: "-8px"}}
        arrow={true}
      />
    </div>
  );
}

export default FilterSearch;
