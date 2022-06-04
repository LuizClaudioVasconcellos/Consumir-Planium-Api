import React from "react";
import "./styles.css";

export default function Text({ name, label, value, setValue, type = "text" }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="input">
      <label>{label}</label>
      <input name={name} onInput={handleChange} value={value} type={type} />
    </div>
  );
}
