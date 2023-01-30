import "./Main.css";
import {useState,useRef} from "react";
import InputLink from "../../component/InputLink";
import ViewGraphButton from "../../component/button/ViewGraphButton";
import AddInputButton from "../../component/button/AddInputButton"

export default function Main() {
  const [inputCnt, setInputCnt] = useState(1);
  const formRef = useRef();
  return (
    <>
      <h1>main</h1>
      <form ref={formRef}>
        {Array(inputCnt).fill(0).map((e,i)=>{
          return <InputLink key={i+1}/>
        })}
      </form>
      <AddInputButton setInputCnt={setInputCnt}/>
      <ViewGraphButton form={formRef}/>
    </>
  );
}
