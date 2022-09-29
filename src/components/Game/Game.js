import React, { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputField from "../InputField/InputField";
import UserGuesses from "../UserGuesses/UserGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [userGuesses, setUserGuesses] = useState([]);

  const handleGuessesUpdate = (userInput) => {
    setUserGuesses([userInput, ...userGuesses]);
  }

    return (
        <>
            Put a game here!
            <UserGuesses userGuesses={userGuesses} />
            <InputField handleGuessesUpdate={handleGuessesUpdate} />
        </>
    );
}

export default Game;
