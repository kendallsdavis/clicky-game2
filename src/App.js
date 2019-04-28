import React, { Component } from "react";
import './App.css';
import cats from "./cats.json";
import CatCard from "./components/catcards";
import Wrapper from "./components/wrapper/index";
import Title from "./components/title";
import Score from "./components/score";
import Instructions from "./components/instructions";
import Result from "./components/result";

class App extends Component {
  // Setting this.state.cats to the cats json array
  state = {
    cats: cats,
    score: 0,
    guessed: []
  };

  // function to shuffle the array of cats, and re setState with the new shuffled array
  shuffleFunction = () => {
    let reshuffle = this.state.cats
    for (let i = reshuffle.length - 1; i > 0; i--) {
          const randomIndex = Math.floor(Math.random() * (i + 1));
          var itemAtIndex = reshuffle[randomIndex];         
          reshuffle[randomIndex] = reshuffle[i]; 
          reshuffle[i] = itemAtIndex;
        }
        this.setState({
          cats: reshuffle,
        })
    }    

    reset = () => {
      this.setState({
        guessed:[],
        score: 0
        })
    }

// this function will be called each time a cat image is clicked. The click event passes the id of the cat selected 
// into the function
checkAndShuffle = (id) => {
  
  // check and see if the cat guessed has already been guessed. If it has, reset the array of guesses to empty and the score to 0
  if(this.state.guessed.includes(id)){
    console.log(id)
    console.log(this.state)
    console.log("Game Over!");
    this.reset();
    
    this.shuffleFunction();
  } else {
    // if it hasn't, push the photo id into the array of guesses and shuffle the cats
  this.shuffleFunction();
  this.state.guessed.push(id)
  this.setState({
    score: this.state.score+1
  })
  // if the guess count has reached 9, alert user has won, reshuffle, and reset
  if(this.state.score === 9){
    console.log("You Win!");
    this.reset()
    this.shuffleFunction()
  }
  console.log(this.state)
}
};



// Map over this.state.cats and render a CatCard component for each cat object
render() {
  return (
    <Wrapper>
      <Title>Fat Cat Shuffle</Title>
      <Instructions></Instructions>
      <Score 
      score={this.state.score}
      />
      {this.state.cats.map(cat => (
        <CatCard
          checkAndShuffle={this.checkAndShuffle}
          id={cat.id}
          key={cat.id}
          name={cat.name}
          image={cat.image}

        />
      ))}
    </Wrapper>
  );
}
}



export default App;
