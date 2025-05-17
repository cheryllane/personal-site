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
        <>
            <p>Filter number of squares in the cage:</p>
            {killerData?.map((a) => {
                return (
                    <button
                        key={a.numberOfSquares}
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
            {killerData?.map((a) => {
                return (
                    <>
                        {(squaresFilter === a.numberOfSquares ||
                            squaresFilter === null) && (
                            <div key={a.numberOfSquares}>
                                <h2>{a.numberOfSquares}</h2>
                                {a.combinations.map((b) => {
                                    return (
                                        <li key={b.total}>
                                            {b.total}:{" "}
                                            {b.possibleSets.map((c) => {
                                                return (
                                                    <div
                                                        className="set"
                                                        key={c.toString()}
                                                    >
                                                        {c.map((d) => {
                                                            return (
                                                                <span key={d}>
                                                                    {d}
                                                                </span>
                                                            );
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
