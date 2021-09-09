import "./searchBar.css";
import SearchSvg from "../../../svgs/search.svg";
import SortSvg from "../../../svgs/bi_sort-down-alt.svg";
import SortBy from "./sortBy/SortBy.jsx";

function SearchBar({SortState, FilterState, SortByState}) {
  const {SortOption, SwitchSortOption} = SortState;
  const {SwitchFilterOption} = FilterState;

  const onClickHandler = () => {
    SwitchSortOption(!SortOption);
    SwitchFilterOption(false);
  }

  return (
    <div className="search-bar-flex">
      <div className="search-bar-with-icons global-box-shadow">
        <label className="search-label" htmlFor="search-input-field">
          <img src={SearchSvg} className="bar-search-icon" alt="search-icon" />
        </label>
        <input
          type="text"
          id="search-input-field"
          className="search-bar-style"
          placeholder="Search"
        />
        <img onClick={onClickHandler} src={SortSvg} className="bar-sort-icon" alt="sort-icon" />
        {SortOption && <SortBy SortState={SortState} SortByState={SortByState}/>}
      </div>
    </div>
  );
}

export default SearchBar;
