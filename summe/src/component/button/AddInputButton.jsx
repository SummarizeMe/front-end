import "./Button.css";
import addLink from "../../picture/addLink.png";

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
