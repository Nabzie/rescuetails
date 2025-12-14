import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/adopt">Adopt</Link> |{" "}
      <Link to="/report">Report</Link>
    </nav>
  );
}

export default Navbar;