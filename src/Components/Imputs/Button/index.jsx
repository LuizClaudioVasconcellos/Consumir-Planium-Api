import React from "react";
import "./styles.css";

export default function Button({ label, onClick, onSubmit }) {
  return (
    <button className="button" onClick={onClick} onSubmit={onSubmit}>
      {label}
    </button>
  );
}
