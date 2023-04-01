import "./Button.css";
import ViewGraphIcon from "../../picture/viewGraphIcon.png";

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
      <button className="viewGraphButton" type="button" onClick={onClick}>
        <img
          src={ViewGraphIcon}
          className="App-logo"
          alt="React"
          height={20}
          style={{
            marginRight: "5px",
          }}
        />
        View Graph
      </button>
    </>
  );
}
