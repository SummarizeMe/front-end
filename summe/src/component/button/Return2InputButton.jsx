import "./Button.css";
export default function Return2InputButton({ setIsGraph }) {
    const handleClick = () => {
        setIsGraph(false);
    };

    return (
        <>
            <button className="returnInputButton" onClick={handleClick}>Return To Input</button>
        </>
    );
}
