import React from "react";
import "./styles.css";

export default function Template(props) {
  return <div className="containerTemplate">{props.children}</div>;
}
