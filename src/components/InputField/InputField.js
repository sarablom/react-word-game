import React, { useState } from "react";

function InputField({ handleGuessesUpdate }) {
    const [userInput, setUserInput] = useState("");

    const onSubmitHandler = event => {
        event.preventDefault();
        handleGuessesUpdate(userInput);
        setUserInput("");
    };
    return (
        <form className="guess-input-wrapper" onSubmit={onSubmitHandler}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                required
                id="guess-input"
                type="text"
                value={userInput}
                onChange={e => setUserInput(e.target.value.toUpperCase())}
                minLength={5}
                maxLength={5}
            />
        </form>
    );
}

export default InputField;
