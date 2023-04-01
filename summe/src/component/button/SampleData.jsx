import "./Button.css";

export default function SampleData({ setInput }) {
  return (
    <>
      <button
        className="sampleData"
        onClick={(e) =>
          setInput([
            { link: "https://github.com/bokoo14", type: "github" },
            { link: "https://bokoo.tistory.com/", type: "tistory" },
            { link: "https://velog.io/@oune", type: "velog" },
          ])
        }
      >
        Sample Data
      </button>
    </>
  );
}
