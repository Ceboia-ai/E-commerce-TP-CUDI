import React from "react";

function FormField({ fieldName, fieldValue, onChange }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
        {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
      </label>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <FieldIcon size={20} />
        <input
          type={fieldName === "password" ? "password" : "text"}
          value={fieldValue}
          onChange={(e) => onChange(e.target.value)}
          placeholder={`Ingresá tu ${fieldName}`}
          style={{
            padding: "0.5rem",
            flex: 1,
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
    </div>
  );
}

export default FormField;
