import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const checkedResult = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          className={
            checkedResult ? `cell ${checkedResult[num].status}` : "cell"
          }
          key={num}
        >
          {checkedResult ? checkedResult[num].letter : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
