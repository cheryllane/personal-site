import { useEffect, useState } from "react";
import StardewBundles from "../data/StardewBundles.json";
import ListItem from "../molecules/ListItem";
import "./Stardew.css";

function Stardew() {
    const items = StardewBundles.items;
    const [bundleState, setBundleState] = useState(
        items.map(({ ID }) => {
            return { ID: ID, state: false };
        })
    );

    useEffect(() => {
        const stardew = localStorage.getItem("stardew_state");

        if (stardew) {
            setBundleState(JSON.parse(stardew));
        }

        return () => {};
    }, []);

    const check = (changedID: number) => {
        const b = [...bundleState];
        const changed = bundleState.findIndex(({ ID }) => {
            return ID === changedID;
        });
        b[changed]["state"] = !bundleState[changed].state;
        setBundleState(b);
        localStorage.setItem("stardew_state", JSON.stringify(b));
    };

    const clearProgress = () => {
        const cleared = items.map(({ ID }) => {
            return { ID: ID, state: false };
        });
        setBundleState(cleared);
        localStorage.setItem("stardew_state", JSON.stringify(cleared));
    };

    const completedCount = bundleState.filter(({ state }) => state).length;
    const totalCount = items.length;
    const progressPercentage = (completedCount / totalCount) * 100;

    return (
        <div className="card">
            <div className="card-header">
                <div className="stardew-header">
                    <h1>Stardew Valley Bundle Checklist</h1>
                    <p>
                        Track your progress through the Community Center bundles
                    </p>
                </div>
            </div>
            <div className="card-text">
                <div className="stardew-container">
                    <div className="progress-section">
                        <h2>
                            Progress: {completedCount} / {totalCount} Completed
                        </h2>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${progressPercentage}%` }}
                            >
                                {Math.round(progressPercentage)}%
                            </div>
                        </div>
                        <button
                            className="clear-button"
                            onClick={clearProgress}
                        >
                            Clear All Progress
                        </button>
                    </div>

                    <ul className="bundles-list">
                        {items.map((item) => {
                            const isCompleted =
                                bundleState.find(({ ID }) => ID === item.ID)
                                    ?.state || false;

                            // Handle both old and new structure
                            const englishName = item.name.english;
                            const japaneseName = item.name.japanese;

                            return (
                                <ListItem
                                    key={item.ID}
                                    ID={item.ID}
                                    item={englishName}
                                    japanese={japaneseName}
                                    source={item.source}
                                    checked={isCompleted}
                                    onChange={check}
                                />
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Stardew;
