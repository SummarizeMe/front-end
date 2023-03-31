import "./Main.css";
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
    return (<>
      <form ref={formRef}>
        {Array(inputCnt)
          .fill(0)
          .map((e, i) => {
            return <InputLink key={i + 1} />;
          })}
      </form>
      <AddInputButton setInputCnt={setInputCnt} />
      <ViewGraphButton formRef={formRef} setData={setData} />
    </>
    )
  }

  return (
    <>
      <ViewGraph state={data} />
      <Return2InputButton setInputCnt={setInputCnt} setData={setData}></Return2InputButton>
    </>
  );
}
