import "./Button.css";

export default function AddInputButton({ setInput }) {
  const addComponent = () => {
    setInput((e) => e.concat({ link: "", type: "" }));
  };
  return (
    <>
      <button className="plusButton" onClick={addComponent}>
        +
      </button>
    </>
  );
}
