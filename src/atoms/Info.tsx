import { useState } from "react";
import "./Icon.css";

function Info({ text }: { text: string }) {
    const [displayInfo, setDisplayInfo] = useState(false);

    return (
        <>
            <button
                className="info-button"
                aria-description="Button that displays help text"
                onClick={(e) => {
                    e.preventDefault();
                    setDisplayInfo(!displayInfo);
                }}
            >
                &#9432;
            </button>
            {displayInfo ? <div className="info-popover">{text}</div> : <></>}
        </>
    );
}

export default Info;
