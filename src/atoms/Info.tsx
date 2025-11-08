import { useState } from "react";
import "./Icon.css";

function Info({
    text,
    onClick,
    showInfo,
}: {
    text: string;
    onClick?: () => void;
    showInfo?: boolean;
}) {
    const [displayInfo, setDisplayInfo] = useState(false);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (onClick) {
            onClick();
        } else {
            setDisplayInfo(!displayInfo);
        }
    };

    const shouldShow = showInfo !== undefined ? showInfo : displayInfo;

    return (
        <>
            <button
                className="info-button"
                aria-label="Show translation"
                onClick={handleClick}
            >
                {shouldShow ? "👁️" : "ℹ️"}
            </button>
            {shouldShow && <div className="info-popover">{text}</div>}
        </>
    );
}

export default Info;
