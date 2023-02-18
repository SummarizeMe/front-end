import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../picture/logo.png";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/" className="link">
          <img
            src={logo}
            alt="SUMME logo"
            style={{
              position: "fixed",
              top: 10,
              left: 30,
              height: 60,
            }}
          />
        </Link>
      </h1>
      <div className="menu" style={{ marginTop: 100 }}>
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
