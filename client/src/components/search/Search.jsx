import "./search.css";
import SearchBar from "./searchBar/SearchBar.jsx";
import FilterSearch from "./filterSearch/FilterSearch.jsx";

function Search({searchStyle}) {
  return (
    <div className="search-content-space">
      <div className="search-align" style={searchStyle}>
        <SearchBar />
        <FilterSearch />
      </div>
    </div>
  );
}

export default Search;
