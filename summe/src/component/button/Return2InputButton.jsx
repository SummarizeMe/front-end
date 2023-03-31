export default function Return2InputButton({ setInputCnt, setData }) {
    const handleClick = () => {
        setInputCnt(1);
        setData([]);
    };

    return (
        <>
            <button onClick={handleClick}>Return To Input</button>
        </>
    );
}
