import "./searchBar.css";
import SearchSvg from "../../../svgs/search.svg";
import SortSvg from "../../../svgs/bi_sort-down-alt.svg";

function SearchBar() {
  return (
    <div className="search-bar-flex">
        <div className="search-bar-with-icons global-box-shadow">
          <label className="search-label" htmlFor="search-input-field"><img src={SearchSvg} className="bar-search-icon" alt="search-icon" /></label>
          <input type="text" id="search-input-field" className="search-bar-style" placeholder="Search"/>
          <img src={SortSvg} className="bar-sort-icon" alt="sort-icon" />
        </div>
    </div>
  );
}

export default SearchBar;
