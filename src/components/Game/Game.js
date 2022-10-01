import React, { useState, useEffect } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputField from "../InputField/InputField";
import UserGuesses from "../UserGuesses/UserGuesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner/SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [userGuesses, setUserGuesses] = useState([]);
    const [gameStatus, setGameStatus] = useState({
        running: true,
        won: false,
        lost: false,
    });

    useEffect(() => {
        const correctGuess = userGuesses.find(guess => guess === answer);
        if (correctGuess)
            setGameStatus({ running: false, won: true, lost: false });

        if (userGuesses.length === NUM_OF_GUESSES_ALLOWED && !correctGuess)
            setGameStatus({ running: false, won: false, lost: true });
    }, [userGuesses]);

    const handleGuessesUpdate = userInput => {
        if (userGuesses.length < NUM_OF_GUESSES_ALLOWED) {
            setUserGuesses([userInput, ...userGuesses]);
            setGameStatus({ ...gameStatus, running: true });
        }
    };

    return (
        <>
            {gameStatus.won && <HappyBanner numOfGuesses={userGuesses.length} />}
            {gameStatus.lost && <SadBanner answer={answer} />}
            <UserGuesses userGuesses={userGuesses} answer={answer} />
            <InputField
                handleGuessesUpdate={handleGuessesUpdate}
                gameStatus={gameStatus}
            />
        </>
    );
}

export default Game;
