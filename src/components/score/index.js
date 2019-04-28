import React from "react";
import "./style.css";

function Score(props) {
  return <span className="animated heartBeat" id="score">Current Score: {props.children}{props.score}</span>;
}

export default Score;
