import Info from "../atoms/Info";

function ListItem({
    ID,
    item,
    source,
    japanese,
    checked,
    onChange,
}: {
    ID: string;
    item: string;
    source: string;
    japanese: string;
    checked: boolean;
    onChange: (id: string) => void;
}) {
    return (
        <>
            <li>
                <form>
                    <input
                        id={`checkbox-${ID}`}
                        type="checkbox"
                        checked={checked}
                        onChange={() => onChange(ID)}
                    />
                    <label htmlFor={`checkbox-${ID}`}>
                        {japanese}
                        <Info text={`${item}: ${source}`} />
                    </label>
                </form>
            </li>
        </>
    );
}

export default ListItem;
