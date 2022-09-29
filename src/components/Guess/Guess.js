import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
    return <span className={`cell ${status}`}>{letter}</span>;
}

function Guess({ value, answer }) {
    const result = checkGuess(value, answer);
    return (
        <div className="guess-results">
            <p className="guess">
                {range(5).map(num => (
                    <Cell
                        key={num}
                        letter={result ? result[num].letter : undefined}
                        status={result ? result[num].status : undefined}
                    />
                ))}
            </p>
        </div>
    );
}

export default Guess;
