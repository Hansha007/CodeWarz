import "../styles/about.css";

function AboutCodeWarz() {
  return (
    <section className="about-section">

      <p className="about-mini">
        WHAT IS CODEWARZ
      </p>

      <h1 className="about-title">
        The Future Of Competitive Coding
      </h1>

      <p className="about-desc">
        CodeWarz transforms problem solving into a futuristic battle arena
        where coders compete, sharpen their skills, earn XP, and rise
        through warrior ranks in real-time coding challenges.
      </p>

      <div className="about-grid">

        <div className="about-card">
          <h2>⚔</h2>
          <p>Real-Time Battles</p>
        </div>

        <div className="about-card">
          <h2>🧠</h2>
          <p>DSA Challenges</p>
        </div>

        <div className="about-card">
          <h2>🏆</h2>
          <p>XP Progression</p>
        </div>

        <div className="about-card">
          <h2>🌍</h2>
          <p>Global Arena</p>
        </div>

      </div>

    </section>
  );
}

export default AboutCodeWarz;