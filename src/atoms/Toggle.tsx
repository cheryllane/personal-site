import "./Toggle.css";

const Toggle = ({
    label,
    current,
    onChange,
}: {
    label: string;
    current: boolean;
    onChange: (newValue: boolean) => void;
}) => {
    return (
        <>
            <div>
                <label htmlFor={label.replace(/\s/i, "")}>{label}</label>
                <button
                    id={label.replace(/\s/i, "")}
                    className="toggle"
                    onClick={() => onChange(!current)}
                    aria-pressed={current}
                    aria-labelledby="toggle-label"
                ></button>
            </div>
        </>
    );
};

export default Toggle;
