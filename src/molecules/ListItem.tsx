import { useState } from "react";
import Info from "../atoms/Info";

function ListItem({
    ID,
    item,
    source,
    japanese,
    checked,
    onChange,
}: {
    ID: number;
    item: string;
    source: string;
    japanese: string;
    checked: boolean;
    onChange: (id: number) => void;
}) {
    const [showTranslation, setShowTranslation] = useState(false);

    const toggleTranslation = () => {
        setShowTranslation(!showTranslation);
    };

    return (
        <li className={`bundle-item ${checked ? "completed" : ""}`}>
            <form className="bundle-form">
                <div className="bundle-checkbox">
                    <input
                        id={`checkbox-${ID}`}
                        type="checkbox"
                        checked={checked}
                        onChange={() => onChange(ID)}
                    />
                </div>
                <div className="bundle-content">
                    <div className="bundle-japanese">
                        {japanese}
                        <Info
                            text={`${item}: ${source}`}
                            onClick={toggleTranslation}
                            showInfo={showTranslation}
                        />
                    </div>
                    <div
                        className={`bundle-translation ${
                            showTranslation ? "visible" : "hidden"
                        }`}
                    >
                        {item}
                    </div>
                    <div
                        className={`bundle-source ${
                            showTranslation ? "visible" : "hidden"
                        }`}
                    >
                        Source: {source}
                    </div>
                </div>
            </form>
        </li>
    );
}

export default ListItem;
