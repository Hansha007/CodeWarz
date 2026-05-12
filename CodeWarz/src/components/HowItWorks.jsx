import "../styles/howitworks.css";
import { Link } from "react-router-dom";

function HowItWorks() {
  return (
    <section className="how-section">

      <div className="feature-card">
        <h2>⚡ Dynamic Coding Battles</h2>
        <p>Face handcrafted coding missions with escalating complexity and warrior rewards.</p>
      </div>

      <div className="feature-card">
        <h2>🏆 XP Progression</h2>
        <p>Earn experience points, unlock elite warrior tiers, and dominate the global rankings.</p>
      </div>

      <div className="feature-card">
        <h2>🔥 Real-Time Arena</h2>
        <p>Challenge coders in simulated multiplayer duels where speed and logic decide victory.</p>
      </div>

      <div className="feature-card">
        <h2>👥 Competitive Leaderboards</h2>
        <p>Track the strongest coders worldwide and push your profile toward legendary status.</p>
      </div>

      <Link to="/problems">
        <button className="explore-btn">ENTER BATTLE MISSIONS</button>
      </Link>
    </section>
  );
}

export default HowItWorks;