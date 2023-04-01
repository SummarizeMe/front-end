import "./Button.css";

export default function ViewGraphButton({ input,setInput,setIsGraph }) {
  const onClick = () => {
    if(!input.some(e=>e.link!==""&&e.type!=="")){
      alert("Please fill in all the blanks");
      return;
    }
    setInput(input.filter(e=>e.link!==""&&e.type!==""));
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
