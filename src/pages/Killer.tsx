import { useEffect, useState } from "react";
import { data, square } from "../data/killerData";
import "./Killer.css";

function Killer() {
    // Filter the number of squares in a cage
    const [squaresFilter, setSquaresFilter] = useState<number | null>(null);
    // Filter by total value
    const [totalFilter, setTotalFilter] = useState<number | null>(null);
    // Filter by specific numbers in sets
    const [numberFilter, setNumberFilter] = useState<number | null>(null);
    // Toggle visibility of filters
    const [showFilters, setShowFilters] = useState<boolean>(true);
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
                <div className="filter-controls">
                    <button
                        className="killer-button"
                        onClick={() => {
                            setShowFilters(!showFilters);
                        }}
                    >
                        {showFilters ? "Hide Filters" : "Show Filters"}
                    </button>
                    <button
                        className="killer-button"
                        aria-disabled={
                            squaresFilter === null &&
                            totalFilter === null &&
                            numberFilter === null
                        }
                        onClick={() => {
                            setSquaresFilter(null);
                            setTotalFilter(null);
                            setNumberFilter(null);
                        }}
                    >
                        Clear All Filters
                    </button>
                </div>
                {showFilters && (
                    <>
                        <div className="filter-section">
                            <p>Filter number of squares in the cage:</p>
                            <div className="filter-buttons">
                                {killerData
                                    ?.filter(
                                        (a) =>
                                            totalFilter === null ||
                                            a.combinations.some(
                                                (b) => b.total === totalFilter
                                            )
                                    )
                                    .map((a) => {
                                        return (
                                            <button
                                                key={a.numberOfSquares}
                                                className="killer-button"
                                                aria-disabled={
                                                    squaresFilter ===
                                                    a.numberOfSquares
                                                }
                                                onClick={() => {
                                                    setSquaresFilter(
                                                        a.numberOfSquares
                                                    );
                                                }}
                                            >
                                                {a.numberOfSquares}
                                            </button>
                                        );
                                    })}
                            </div>
                            <button
                                className="killer-button"
                                aria-disabled={squaresFilter === null}
                                onClick={() => {
                                    setSquaresFilter(null);
                                }}
                            >
                                Clear Filter
                            </button>
                        </div>

                        <div className="filter-section">
                            <p>Filter by total value:</p>
                            <div className="filter-buttons">
                                {Array.from(
                                    new Set(
                                        killerData
                                            ?.filter(
                                                (a) =>
                                                    squaresFilter === null ||
                                                    a.numberOfSquares ===
                                                        squaresFilter
                                            )
                                            .flatMap((a) =>
                                                a.combinations
                                                    .filter(
                                                        (b) =>
                                                            numberFilter ===
                                                                null ||
                                                            b.possibleSets.some(
                                                                (set) =>
                                                                    set.includes(
                                                                        numberFilter
                                                                    )
                                                            )
                                                    )
                                                    .map((b) => b.total)
                                            )
                                    )
                                )
                                    .sort((a, b) => a - b)
                                    .map((total) => {
                                        return (
                                            <button
                                                key={total}
                                                className="killer-button"
                                                aria-disabled={
                                                    totalFilter === total
                                                }
                                                onClick={() => {
                                                    setTotalFilter(total);
                                                }}
                                            >
                                                {total}
                                            </button>
                                        );
                                    })}
                            </div>
                            <button
                                className="killer-button"
                                aria-disabled={totalFilter === null}
                                onClick={() => {
                                    setTotalFilter(null);
                                }}
                            >
                                Clear Filter
                            </button>
                        </div>

                        <div className="filter-section">
                            <p>Filter by numbers in sets:</p>
                            <div className="filter-buttons">
                                {Array.from({ length: 9 }, (_, i) => i + 1).map(
                                    (num) => {
                                        // Check if this number appears in any relevant combinations
                                        const isRelevant = killerData
                                            ?.filter(
                                                (a) =>
                                                    (squaresFilter === null ||
                                                        a.numberOfSquares ===
                                                            squaresFilter) &&
                                                    (totalFilter === null ||
                                                        a.combinations.some(
                                                            (b) =>
                                                                b.total ===
                                                                totalFilter
                                                        ))
                                            )
                                            .some((a) =>
                                                a.combinations.some(
                                                    (b) =>
                                                        (totalFilter === null ||
                                                            b.total ===
                                                                totalFilter) &&
                                                        b.possibleSets.some(
                                                            (set) =>
                                                                set.includes(
                                                                    num
                                                                )
                                                        )
                                                )
                                            );

                                        if (!isRelevant) return null;

                                        return (
                                            <button
                                                key={num}
                                                className="killer-button"
                                                aria-disabled={
                                                    numberFilter === num
                                                }
                                                onClick={() => {
                                                    setNumberFilter(num);
                                                }}
                                            >
                                                {num}
                                            </button>
                                        );
                                    }
                                )}
                            </div>
                            <button
                                className="killer-button"
                                aria-disabled={numberFilter === null}
                                onClick={() => {
                                    setNumberFilter(null);
                                }}
                            >
                                Clear Filter
                            </button>
                        </div>
                    </>
                )}

                {killerData?.map((a) => {
                    // Check if this squares section has any combinations after filtering
                    const hasVisibleCombinations =
                        a.combinations
                            .filter(
                                (b) =>
                                    totalFilter === null ||
                                    b.total === totalFilter
                            )
                            .filter(
                                (b) =>
                                    numberFilter === null ||
                                    b.possibleSets.some((c) =>
                                        c.includes(numberFilter)
                                    )
                            ).length > 0;

                    return (
                        <div key={a.numberOfSquares}>
                            {(squaresFilter === a.numberOfSquares ||
                                squaresFilter === null) &&
                                hasVisibleCombinations && (
                                    <div className="cage-section">
                                        <h2>
                                            {a.numberOfSquares}{" "}
                                            {a.numberOfSquares === 1
                                                ? "Square"
                                                : "Squares"}
                                        </h2>
                                        <ul className="combinations-list">
                                            {a.combinations
                                                .filter(
                                                    (b) =>
                                                        totalFilter === null ||
                                                        b.total === totalFilter
                                                )
                                                .filter(
                                                    (b) =>
                                                        numberFilter === null ||
                                                        b.possibleSets.some(
                                                            (c) =>
                                                                c.includes(
                                                                    numberFilter
                                                                )
                                                        )
                                                )
                                                .map((b) => {
                                                    return (
                                                        <li
                                                            key={b.total}
                                                            className="combination-item"
                                                        >
                                                            <div className="combination-total">
                                                                Total: {b.total}
                                                            </div>
                                                            <div className="set-container">
                                                                {b.possibleSets
                                                                    .filter(
                                                                        (c) =>
                                                                            numberFilter ===
                                                                                null ||
                                                                            c.includes(
                                                                                numberFilter
                                                                            )
                                                                    )
                                                                    .map(
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
                                                                                                    className={
                                                                                                        numberFilter ===
                                                                                                        d
                                                                                                            ? "highlighted-number"
                                                                                                            : ""
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
