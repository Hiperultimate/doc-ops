import "./search.css";
import SearchBar from "./searchBar/SearchBar.jsx";
import FilterSearch from "./filterSearch/FilterSearch.jsx";

function Search({
  searchStyle,
  SortState,
  FilterState,
  SortValState,
  LocationState,
  FeeState,
  SpecializationState,
  TreatmentState,
  SpecializationsData,
  TreatmentsData,
}) {
  return (
    <div className="search-content-space">
      <div className="search-align" style={searchStyle}>
        <SearchBar
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
          SpecializationsData={SpecializationsData}
          TreatmentsData={TreatmentsData}
        />
      </div>
    </div>
  );
}

export default Search;
