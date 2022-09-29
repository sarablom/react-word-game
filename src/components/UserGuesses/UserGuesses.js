import React from "react";

function UserGuesses({ userGuesses }) {
    return (
        <div className="guess-results">
            {userGuesses.length > 1 &&
                userGuesses.map((guess, index) => (
                    <p className="guess" key={guess + index}>
                        {guess}
                    </p>
                ))}
        </div>
    );
}

export default UserGuesses;
