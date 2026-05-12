import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* LEFT */}
        <div className="footer-brand">
          <h1>CODEWARZ</h1>

          <p>
            Code. Battle. Conquer.
          </p>
        </div>

        {/* CENTER */}
        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/problems">Problems</a>
          <a href="/arena">Arena</a>
          <a href="/leaderboard">Leaderboard</a>
          <a href="/dashboard">Dashboard</a>

        </div>

        {/* RIGHT */}
        <div className="footer-socials">

          <h3>Community</h3>

          <a href="/">GitHub</a>
          <a href="/">Discord</a>
          <a href="/">LinkedIn</a>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 CodeWarz. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;