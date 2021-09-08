import "./filterSearch.css";
import Button from "../../mainButton/MainButton.jsx";

function FilterSearch() {
  const onClickHandler = () => {
    console.log("Filter button pressed");
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
