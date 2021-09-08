import "./searchBar.css";
import SearchSvg from "../../../svgs/search.svg";
import SortSvg from "../../../svgs/bi_sort-down-alt.svg";

function SearchBar() {
  return (
    <div className="search-bar-flex">
        {/* <input type="text" className="search-bar-style global-box-shadow" placeholder="Search"/> */}
        <div className="search-bar-with-icons global-box-shadow">
          <img src={SearchSvg} className="bar-search-icon" alt="search-icon" />
          <input type="text" className="search-bar-style" placeholder="Search"/>
          <img src={SortSvg} className="bar-sort-icon" alt="sort-icon" />
        </div>
    </div>
  );
}

export default SearchBar;
