import React from "react";

function GuessInput({ handleGuess, isGameOver }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handleGuess(guess);

    setGuess("");
  }

  function handleInput(event) {
    setGuess(event.target.value.toUpperCase());
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        name="guessInput"
        type="text"
        value={guess}
        onChange={handleInput}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        maxLength={5}
        disabled={isGameOver}
      />
    </form>
  );
}

export default GuessInput;
