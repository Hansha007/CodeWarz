import "../styles/finalcta.css";
import { Link } from "react-router-dom";

function FinalCTA() {
  return (
    <section className="cta-section">

      <div className="cta-box">

        <p className="cta-mini">
          ENTER THE FUTURE OF CODING
        </p>

        <h1 className="cta-title">
          Ready To Become A Legendary Warrior?
        </h1>

        <p className="cta-desc">
          Compete in real-time coding battles, sharpen your skills,
          earn XP, and dominate the global arena.
        </p>

        <Link to="/liveroom">
        <button className="cta-btn">
          BEGIN YOUR JOURNEY
          </button>
          </Link>

      </div>

    </section>
  );
}

export default FinalCTA;