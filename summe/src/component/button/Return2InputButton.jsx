export default function Return2InputButton({ setIsGraph }) {
    const handleClick = () => {
        setIsGraph(false);
    };

    return (
        <>
            <button onClick={handleClick}>Return To Input</button>
        </>
    );
}
