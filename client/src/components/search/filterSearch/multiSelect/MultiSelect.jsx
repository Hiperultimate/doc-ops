import "react-widgets/styles.css";
import {useState} from "react";
import Multiselect from "react-widgets/Multiselect";

function MultiSelect({options}) {
    const [fetchData, changeData] = useState([...options]); //Contains an array
  return (

      <Multiselect
        defaultValue={[]}
        data={fetchData}
        placeholder={"Enter Specialization..."}
      />

  );
}

export default MultiSelect;
