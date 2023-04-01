import "./InputLink.css";
import { useState } from "react";

export default function InputLink({ input, setInput}) {
  let urlTypes = ["github", "tistory", "velog", "notion"];
  console.log(input);
  return (
    <div>
      <input
        className="inputLink"
        type="text"
        placeholder="Input Your Link"
        name="link"
        style={{ paddingLeft: "10px" }}
        onChange={(e) => {
          setInput({...input, link: e.target.value});
        }}
        value={input.link}
      />

      {urlTypes.map((e, i) => {
        return (
          <button
            key={i}
            onClick={(f) => {
              f.preventDefault();
              setInput({...input, type: e});
            }}
            className={input.type === e ? "selected" : "notselected"}
          >
            {e.charAt(0).toUpperCase() + e.slice(1)}
          </button>
        );
      })}
    </div>
  );
}
