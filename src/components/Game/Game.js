import React, { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputField from "../InputField/InputField";
import UserGuesses from "../UserGuesses/UserGuesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [userGuesses, setUserGuesses] = useState([]);

    const handleGuessesUpdate = userInput => {
        if (userGuesses.length < NUM_OF_GUESSES_ALLOWED) {
            setUserGuesses([userInput, ...userGuesses]);
        }
    };

    return (
        <>
            Put a game here!
            <UserGuesses userGuesses={userGuesses} answer={answer} />
            <InputField handleGuessesUpdate={handleGuessesUpdate} />
        </>
    );
}

export default Game;
