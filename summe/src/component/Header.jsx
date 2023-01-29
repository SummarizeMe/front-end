import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <a href="/">SummE</a>
      </h1>
      <div className="menu">
        <a href="/" className="link">
          Input
        </a>
        <a href="/viewgraph" className="link">
          View Graph
        </a>
        <a href="/viewothers" className="link">
          ViewOthers
        </a>
      </div>
    </div>
  );
}
