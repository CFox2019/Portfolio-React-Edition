import React from "react";
import "../components/css/Title.css";

function Title(props) {
  return <h1 className="title-h1">{props.pageTitle}</h1>;
}

export default Title;