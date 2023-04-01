import "./Main.css";
import Logo from "../../picture/SUMME_Logo.png";
import { useState, useRef } from "react";
import InputLink from "../../component/InputLink";
import ViewGraphButton from "../../component/button/ViewGraphButton";
import AddInputButton from "../../component/button/AddInputButton";
import Return2InputButton from "../../component/button/Return2InputButton";
import ViewGraph from "../view graph/ViewGraph";

export default function Main() {
  const formRef = useRef();
  const [inputCnt, setInputCnt] = useState(1);
  const [data, setData] = useState([]);

  if (data.length === 0) {
    return (
      <div style={{ textAlign: "center" }}>
        <img
          src={Logo}
          className="App-logo"
          alt="React"
          width={300}
          style={{
            marginTop: "30px",
            marginBottom: "30px",
            textAlign: "center",
          }}
        />

        <form ref={formRef}>
          {Array(inputCnt)
            .fill(0)
            .map((e, i) => {
              return <InputLink key={i + 1} />;
            })}
        </form>

        <AddInputButton setInputCnt={setInputCnt} />
        <ViewGraphButton
          className="viewGraphButton"
          formRef={formRef}
          setData={setData}
        />
      </div>
    );
  }

  return (
    <>
      <ViewGraph state={data} />
      <Return2InputButton
        setInputCnt={setInputCnt}
        setData={setData}
      ></Return2InputButton>
    </>
  );
}
