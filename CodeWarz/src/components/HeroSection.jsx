import heroImg from "../assets/codewarz-hero-clean.png";
import "../styles/hero.css";

function HeroSection() {
  return (
    <section className="hero-section">

      {/* HERO IMAGE */}
      <img
        src={heroImg}
        alt="CodeWarz Hero"
        className="hero-image"
      />

      {/* DARK OVERLAY */}
      <div className="hero-dark-overlay"></div>

      {/* EXTRA SPACING BELOW HERO */}
      <div className="hero-bottom-space"></div>

    </section>
  );
}

export default HeroSection;