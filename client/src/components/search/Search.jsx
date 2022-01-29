import "./search.css";
import SearchBar from "./searchBar/SearchBar.jsx";
import FilterSearch from "./filterSearch/FilterSearch.jsx";

function Search({
  searchStyle,
  SearchState,
  SortState,
  FilterState,
  SortValState,
  LocationState,
  FeeState,
  SpecializationState,
  TreatmentState,

}) {
  return (
    <div className="search-content-space">
      <div className="search-align" style={searchStyle}>
        <SearchBar
          SearchState={SearchState}
          SortState={SortState}
          FilterState={FilterState}
          SortByState={SortValState}
        />
        <FilterSearch
          FilterState={FilterState}
          SortState={SortState}
          SortByState={SortValState}
          LocationState={LocationState}
          FeeState={FeeState}
          SpecializationState={SpecializationState}
          TreatmentState={TreatmentState}
        />
      </div>
    </div>
  );
}

export default Search;
