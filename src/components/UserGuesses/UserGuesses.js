import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function UserGuesses({ userGuesses }) {
    console.log({ userGuesses });
    return (
        <div className="guess-results">
            {range(NUM_OF_GUESSES_ALLOWED).map(num => (
                <Guess key={num} value={userGuesses[num]} />
            ))}
        </div>
    );
}

export default UserGuesses;
