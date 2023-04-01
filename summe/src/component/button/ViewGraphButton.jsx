import "./Button.css";

export default function ViewGraphButton({ setIsGraph }) {
  const onClick = () => {
    setIsGraph(true);
  };

  return (
    <>
      <button className="addViewButton" type="button" onClick={onClick}>
        View Graph
      </button>
    </>
  );
}
