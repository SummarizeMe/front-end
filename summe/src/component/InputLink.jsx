import "./InputLink.css";
import { useState } from "react";

export default function InputLink() {
  const [selectedOption, setSelectedOption] = useState(null);
  console.log(selectedOption);
  let urlTypes = ["github", "tistory", "velog", "notion"];

  return (
    <div>
      {/* input box의 style 수정하기 */}
      <input
        className="inputLink"
        type="text"
        placeholder="Input Your Link"
        name="link"
        style={{ paddingLeft: "10px" }}
      />

      {urlTypes.map((e, i) => {
        return (
          <button
            key={i}
            onClick={(f) => {
              f.preventDefault();
              setSelectedOption(e);
            }}
            className={selectedOption == e ? "selected" : "notselected"}
          >
            {e.charAt(0).toUpperCase() + e.slice(1)}
          </button>
        );
      })}
    </div>
  );
}
