import "./Button.css";

export default function AddInputButton({ setInput }) {
  const addComponent = () => {
    setInput((e) => e.concat({ link: "", type: "" }));
  };
  return (
    <>
      <button className="addViewButton" onClick={addComponent}>
        Add Input Link
      </button>
    </>
  );
}
