import { useState } from "react";
import { data } from "../data/killerData";
import "./Killer.css";

function Killer() {
    // Filter the number of squares in a cage
    const [squaresFilter, setSquaresFilter] = useState<number | null>(null);

    return (
        <>
            <p>Filter number of squares in the cage:</p>
            {data().map((a) => {
                return (
                    <button
                        aria-disabled={squaresFilter === a.numberOfSquares}
                        onClick={(e) => {
                            e.preventDefault;
                            setSquaresFilter(a.numberOfSquares);
                        }}
                    >
                        {a.numberOfSquares}
                    </button>
                );
            })}
            <button
                aria-disabled={squaresFilter === null}
                onClick={(e) => {
                    e.preventDefault;
                    setSquaresFilter(null);
                }}
            >
                Clear
            </button>
            {data().map((a) => {
                return (
                    <>
                        {(squaresFilter === a.numberOfSquares ||
                            squaresFilter === null) && (
                            <div>
                                <h2>{a.numberOfSquares}</h2>
                                {a.combinations.map((b) => {
                                    return (
                                        <li>
                                            {b.total}:{" "}
                                            {b.possibleSets.map((c) => {
                                                return (
                                                    <div className="set">
                                                        {" "}
                                                        {c.map((d) => {
                                                            return d;
                                                        })}
                                                    </div>
                                                );
                                            })}
                                        </li>
                                    );
                                })}
                            </div>
                        )}
                    </>
                );
            })}
            <div className="card"></div>
        </>
    );
}

export default Killer;
