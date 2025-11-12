import React from "react";

function TitleForm({ title }) {
  return (
    <h2 style={{
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      textAlign: "center"
    }}>
      {title}
    </h2>
  );
}

export default TitleForm;
