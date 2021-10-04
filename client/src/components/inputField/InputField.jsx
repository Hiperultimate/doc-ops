import "./inputField.css";

function InputField({
  heading,
  placeholder,
  scaleText,
  scaleTextPos,
  type,
  wrapperClass,
  fieldName,
  setChange,
  value,
  isRequired,
}) {

  const onChange = (event) => {
    setChange(event.target.value);
  }

  return (
    <div className={`input-field ${wrapperClass}`}>
      <span className="input-heading">{heading}</span>
      <div
        className="input-field-pos"
        style={
          scaleTextPos === "right"
            ? {
                display: "flex",
                flexDirection: "row",
              }
            : { display: "flex", flexDirection: "row-reverse" }
        }
      >
        <input
          className="input-box"
          type={type}
          placeholder={placeholder}
          name={fieldName}
          onChange={onChange}
          value={value}
          required={isRequired ? "required" : false}
        />
        <span
          className="scale-text"
          style={
            scaleText && {
              paddingLeft: "10px",
              paddingRight: scaleTextPos !== "right" ? "0px" : "10px",
            }
          }
        >
          {scaleText}
        </span>
      </div>
    </div>
  );
}

export default InputField;
