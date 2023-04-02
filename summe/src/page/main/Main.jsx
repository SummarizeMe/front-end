import "./Main.css";
import Logo from "../../picture/SUMME_Logo.png";
import { useState, useRef } from "react";
import SampleData from "../../component/button/SampleData";
import InputLink from "../../component/InputLink";
import ViewGraphButton from "../../component/button/ViewGraphButton";
import AddInputButton from "../../component/button/AddInputButton";
import Return2InputButton from "../../component/button/Return2InputButton";
import ViewGraph from "../view graph/ViewGraph";

const SummeLogo = () => {
  return (
    <img
      src={Logo}
      className="App-logo"
      alt="React"
      width={300}
      style={{
        marginTop: "80px",
        marginBottom: "60px",
        textAlign: "center",
      }}
    />
  );
};

export default function Main() {
  const [input, setInput] = useState([{ link: "", type: "" }]);
  const [isGraph, setIsGraph] = useState(false);

  if (!isGraph) {
    return (
      <div style={{ textAlign: "center" }}>
        <SummeLogo />

        <div style={{margin:"auto",width:"calc(50% + 256px)"}}>
          <SampleData setInput={setInput} />
          {input.map((e, i) => {
            return (
              <InputLink
                key={i + 1}
                input={e}
                setInput={(e) => {
                  setInput(input.map((f, j) => (j === i ? e : f)));
                }}
              />
            );
          })}
          <AddInputButton setInput={setInput} />
        </div>
        <ViewGraphButton
          input={input}
          setInput={setInput}
          setIsGraph={setIsGraph}
        />
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", maxWidth:"1200px", margin:"auto" }}>
      <SummeLogo />
      <ViewGraph state={input} />
      <Return2InputButton setIsGraph={setIsGraph}></Return2InputButton>
    </div>
  );
}
