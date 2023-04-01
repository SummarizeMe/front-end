import "./Button.css";
import addLink from "../../picture/addLink.png";

export default function AddInputButton({ setInputCnt }) {
  const addComponent = () => {
    setInputCnt((e) => e + 1);
  };
  return (
    <>
      <button className="plusButton" onClick={addComponent}>
        +
      </button>
    </>
  );
}
