import "./Button.css";

export default function AddInputButton({ setInputCnt }) {
  const addComponent = () => {
    setInputCnt((e) => e + 1);
  };
  return (
    <>
      <button className="addViewButton" onClick={addComponent}>
        Add Input Link
      </button>
    </>
  );
}
