import "../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"><Link to="/">CODEWARZ</Link></div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/problems">Problems</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/liveroom">Arena</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
      </ul>

      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="start-btn">Get Started</button>
      </div>
    </nav>
  );
}

export default Navbar;