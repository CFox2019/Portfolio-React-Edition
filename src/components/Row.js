import React from "react";
import "../components/css/Row.css";

function Row(props) {
  return <div className={`row${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

export default Row;