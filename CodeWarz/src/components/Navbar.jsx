import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">CODEWARZ</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Problems</li>
        <li>Contests</li>
        <li>Arena</li>
        <li>Leaderboard</li>
        <li>Profile</li>
      </ul>

      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="start-btn">Get Started</button>
      </div>
    </nav>
  );
}

export default Navbar;