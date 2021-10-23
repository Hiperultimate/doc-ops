import "react-widgets/styles.css";
import "./multiSelect.css";
import Multiselect from "react-widgets/Multiselect";

function MultiSelect({ options, placeholder, stateValue, handleState }) {
  return (
    <Multiselect
      value={stateValue}
      data={options}
      placeholder={placeholder}
      onChange={(value) => handleState(value)}
      filter="contains"
      showPlaceholderWithValues={true}
    />
  );
}

export default MultiSelect;
