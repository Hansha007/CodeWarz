import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "130px 0 60px 0", minHeight: "100vh", width: "88%", margin: "auto" }}>
        <p style={{ color: "#8b9cff", letterSpacing: "3px" }}>WARRIOR CONTROL CENTER</p>

        <h1 style={{ fontSize: "52px", margin: "18px 0 35px 0" }}>
          Your Battle Dashboard
        </h1>

        {/* top stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "18px",
            marginBottom: "25px"
          }}
        >
          {[
            ["750 XP", "Total Experience"],
            ["15", "Battles Solved"],
            ["Rank #27", "Global Position"],
            ["Elite Warrior", "Current Tier"]
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(124,58,237,0.16)",
                borderRadius: "22px",
                padding: "28px",
                textAlign: "center"
              }}
            >
              <h2 style={{ marginBottom: "8px" }}>{item[0]}</h2>
              <p style={{ color: "#94a3b8" }}>{item[1]}</p>
            </div>
          ))}
        </div>

        {/* middle row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            gap: "20px",
            marginBottom: "25px"
          }}
        >
          {/* xp progress */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(124,58,237,0.16)",
              borderRadius: "22px",
              padding: "28px"
            }}
          >
            <h2 style={{ marginBottom: "18px" }}>Warrior Rank Progress</h2>

            <p style={{ marginBottom: "12px", color: "#94a3b8" }}>Elite Warrior → Legendary Master</p>

            <div
              style={{
                width: "100%",
                height: "18px",
                background: "rgba(255,255,255,0.06)",
                borderRadius: "20px",
                overflow: "hidden",
                marginBottom: "10px"
              }}
            >
              <div
                style={{
                  width: "72%",
                  height: "100%",
                  background: "linear-gradient(to right,#7c3aed,#2563eb)"
                }}
              ></div>
            </div>

            <p style={{ color: "#8b9cff" }}>72% Rank Ascension Completed</p>
          </div>

          {/* streak */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(124,58,237,0.16)",
              borderRadius: "22px",
              padding: "28px"
            }}
          >
            <h2 style={{ marginBottom: "18px" }}>Daily Warrior Streak</h2>
            <h1 style={{ fontSize: "70px", marginBottom: "8px" }}>🔥 25</h1>
            <p style={{ color: "#94a3b8" }}>Keep solving daily to protect your streak.</p>
          </div>
        </div>

        {/* bottom row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: "20px"
          }}
        >
          {/* chart */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(124,58,237,0.16)",
              borderRadius: "22px",
              padding: "28px"
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>Weekly Battle Activity</h2>

            <div style={{ display: "flex", gap: "14px", alignItems: "end", height: "200px" }}>
              {[60, 120, 90, 170, 140, 200, 160].map((height, i) => (
                <div
                  key={i}
                  style={{
                    width: "60px",
                    height: `${height}px`,
                    background: "linear-gradient(to top,#7c3aed,#2563eb)",
                    borderRadius: "10px 10px 0 0"
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* achievements */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(124,58,237,0.16)",
              borderRadius: "22px",
              padding: "28px"
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>Unlocked Achievements</h2>

            <div style={{ display: "grid", gap: "14px" }}>
              <div style={{ padding: "16px", borderRadius: "14px", background: "rgba(255,255,255,0.03)" }}>⚔ First Blood - Solved first battle</div>
              <div style={{ padding: "16px", borderRadius: "14px", background: "rgba(255,255,255,0.03)" }}>🔥 Streak Keeper - 25 days active</div>
              <div style={{ padding: "16px", borderRadius: "14px", background: "rgba(255,255,255,0.03)" }}>🏆 Arena Dominator - Top 30 rank</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;