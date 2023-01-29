import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">SummE</Link>
      </h1>
      <div className="menu">
        <Link to="/" className="link">
          Input
        </Link>
        <Link to="/viewgraph" className="link">
          View Graph
        </Link>
        <Link to="/viewothers" className="link">
          ViewOthers
        </Link>
      </div>
    </div>
  );
}
