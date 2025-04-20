import { useEffect, useState } from "react";
import StardewBundles from "../data/StardewBundles.json";
import ListItem from "../molecules/ListItem";

function Stardew() {
    const bundles = StardewBundles.data;
    const [bundleState, setBundleState] = useState(
        bundles.map(({ ID }) => {
            return { ID, state: false };
        })
    );

    useEffect(() => {
        const stardew = localStorage.getItem("stardew_state");

        if (stardew) {
            setBundleState(JSON.parse(stardew));
        }

        return () => {};
    }, []);

    const check = (changedID: string) => {
        const b = [...bundleState];
        const changed = bundleState.findIndex(({ ID }) => {
            return ID === changedID;
        });
        b[changed]["state"] = !bundleState[changed].state;
        setBundleState(b);
        localStorage.setItem("stardew_state", JSON.stringify(b));
    };

    return (
        <>
            <ul>
                {bundles.map((b) => {
                    return (
                        <ListItem
                            key={b.ID}
                            ID={b.ID}
                            item={b.item}
                            japanese={b.japanese}
                            source={b.source}
                            checked={
                                bundleState.find(({ ID }) => ID === b.ID)
                                    ?.state || false
                            }
                            onChange={check}
                        />
                    );
                })}
            </ul>
        </>
    );
}

export default Stardew;
