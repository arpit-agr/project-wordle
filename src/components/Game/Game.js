import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);

  function handleGuess(guess) {
    setGuessResults([...guessResults, guess]);
  }

  return (
    <>
      <GuessResults guessResults={guessResults} />
      <GuessInput handleGuess={handleGuess} />
    </>
  );
}

export default Game;
