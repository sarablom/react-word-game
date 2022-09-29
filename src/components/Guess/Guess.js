import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  console.log({ value });
    return (
        <div className="guess-results">
            <p className="guess">
                {range(5).map(num => (
                    <span key={num} className="cell">
                        {value ? value[num] : undefined}
                    </span>
                ))}
            </p>
        </div>
    );
}

export default Guess;
