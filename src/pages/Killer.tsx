import { useEffect, useState } from "react";
import { data, square } from "../data/killerData";
import "./Killer.css";

function Killer() {
    // Filter the number of squares in a cage
    const [squaresFilter, setSquaresFilter] = useState<number | null>(null);
    const [killerData, setKillerData] = useState<square[]>();

    useEffect(() => {
        setKillerData(data());

        return () => {};
    }, []);

    return (
        <div className="card">
            <div className="card-header">
                <h1>Killer Sudoku Helper</h1>
            </div>
            <div className="card-text">
                <div className="filter-section">
                    <p>Filter number of squares in the cage:</p>
                    <div className="filter-buttons">
                        {killerData?.map((a) => {
                            return (
                                <button
                                    key={a.numberOfSquares}
                                    className="filter-button"
                                    aria-disabled={
                                        squaresFilter === a.numberOfSquares
                                    }
                                    onClick={() => {
                                        setSquaresFilter(a.numberOfSquares);
                                    }}
                                >
                                    {a.numberOfSquares}{" "}
                                    {a.numberOfSquares === 1
                                        ? "Square"
                                        : "Squares"}
                                </button>
                            );
                        })}
                    </div>
                    <button
                        className="clear-button"
                        aria-disabled={squaresFilter === null}
                        onClick={() => {
                            setSquaresFilter(null);
                        }}
                    >
                        Clear Filter
                    </button>
                </div>

                {killerData?.map((a) => {
                    return (
                        <div key={a.numberOfSquares}>
                            {(squaresFilter === a.numberOfSquares ||
                                squaresFilter === null) && (
                                <div className="cage-section">
                                    <h2>
                                        {a.numberOfSquares}{" "}
                                        {a.numberOfSquares === 1
                                            ? "Square"
                                            : "Squares"}
                                    </h2>
                                    <ul className="combinations-list">
                                        {a.combinations.map((b) => {
                                            return (
                                                <li
                                                    key={b.total}
                                                    className="combination-item"
                                                >
                                                    <div className="combination-total">
                                                        Total: {b.total}
                                                    </div>
                                                    <div className="set-container">
                                                        {b.possibleSets.map(
                                                            (c) => {
                                                                return (
                                                                    <div
                                                                        className="set"
                                                                        key={c.toString()}
                                                                    >
                                                                        {c.map(
                                                                            (
                                                                                d
                                                                            ) => {
                                                                                return (
                                                                                    <span
                                                                                        key={
                                                                                            d
                                                                                        }
                                                                                    >
                                                                                        {
                                                                                            d
                                                                                        }
                                                                                    </span>
                                                                                );
                                                                            }
                                                                        )}
                                                                    </div>
                                                                );
                                                            }
                                                        )}
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Killer;
