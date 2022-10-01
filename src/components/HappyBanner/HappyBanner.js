import React from "react";

function HappyBanner({ userGuesses }) {
    return (
        <div className="happy banner">
            <p>
                <strong>Congratulations!</strong> Got it in{" "}
                <strong>{userGuesses.length} guesses</strong>.
            </p>
        </div>
    );
}

export default HappyBanner;
