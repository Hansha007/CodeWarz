import "../styles/hero.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="hero">

      <p className="hero-top-text">ENTER THE ULTIMATE CODING BATTLEFIELD</p>

      <div className="battle-icon">⚔</div>

      <h1 className="hero-title">CODEWARZ</h1>

      <p className="hero-tagline">CODE. FIGHT. CONQUER.</p>

      <Link to="/problems">
        <button className="hero-btn">ENTER THE WARZONE</button>
      </Link>

      <p className="scroll-text">⌄ Scroll Down ⌄</p>

    </section>
  );
}

export default HeroSection;