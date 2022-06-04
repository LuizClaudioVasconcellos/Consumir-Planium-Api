import React from "react";
import "./styles.css";

export default function Select({ name, label, children, value, setValue }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="select">
      <label>{label}</label>
      <select name={name} onInput={handleChange} value={value}>
        {children}
      </select>
    </div>
  );
}
