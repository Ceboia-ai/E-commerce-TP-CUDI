const FormField = ({ fieldName, FieldIcon, fieldValue, onChange }) => {
  return (
    <div>
      <label htmlFor={fieldName}>{fieldName}</label>
      <div style={{ display: "flex", alignItems: "center" }}>
        {FieldIcon && <FieldIcon style={{ marginRight: "8px" }} />}
        <input
          type={fieldName === "password" ? "password" : "text"}
          id={fieldName}
          value={fieldValue}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FormField;
