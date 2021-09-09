import { useState } from "react";

import "./search.css";
import SearchBar from "./searchBar/SearchBar.jsx";
import FilterSearch from "./filterSearch/FilterSearch.jsx";

function Search({ searchStyle }) {
  const [SortOption, SwitchSortOption] = useState(false);
  const [FilterOption, SwitchFilterOption] = useState(false);

  return (
    <div className="search-content-space">
      <div className="search-align" style={searchStyle}>
        <SearchBar
          SortState={{
            SortOption: SortOption,
            SwitchSortOption: SwitchSortOption,
          }}
          FilterState={{
            SwitchFilterOption: SwitchFilterOption,
          }}
        />
        <FilterSearch
          FilterState={{
            FilterOption: FilterOption,
            SwitchFilterOption: SwitchFilterOption,
          }}
          SortState={{
            SwitchSortOption: SwitchSortOption,
          }}
        />
      </div>
    </div>
  );
}

export default Search;
