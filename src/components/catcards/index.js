import React from "react";
import "./style.css";

function CatCard(props) {
  return (
    <div className="card">
      <div id="imgcontainer" className="animated flipInX" onClick={() => props.checkAndShuffle(props.name)}>
        <img alt={props.name} id={props.name} src={props.image} />
      </div>
    </div>
  );
}


// let score = 0;

// adjustScore => (props) {
// if(props.clicked === 0){
//   score++
//   props.clicked = 1
//   props.shuffleCats() 
// } else {
//   score = 0;
// }
// }



export default CatCard;
