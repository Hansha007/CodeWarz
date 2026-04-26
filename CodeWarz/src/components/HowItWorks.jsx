import "../styles/howitworks.css";

function HowItWorks() {
  return (
    <section className="how-section">

      <div className="how-left">
        <p className="section-mini">HOW CODEWARZ WORKS</p>
        <h1>Step Into The Arena. Solve. Rise. Repeat.</h1>
        <p className="section-desc">
          Face hand-crafted coding battles, unlock XP, dominate the live arena,
          and climb through warrior ranks as every solved challenge sharpens your edge.
        </p>

        <button className="explore-btn">EXPLORE BATTLES</button>
      </div>

      <div className="how-right">
        <div className="mini-panel">⚡ Dynamic Coding Battles</div>
        <div className="mini-panel">🏆 XP & Rank Progression</div>
        <div className="mini-panel">🔥 Real-Time Live Arena</div>
        <div className="mini-panel">👥 Warrior Leaderboards</div>
      </div>

    </section>
  );
}

export default HowItWorks;