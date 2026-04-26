import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "130px 70px", minHeight: "100vh" }}>
        <p style={{ color: "#8b9cff", letterSpacing: "3px" }}>WARRIOR CONTROL CENTER</p>

        <h1 style={{ fontSize: "55px", margin: "20px 0 40px 0" }}>
          Your Battle Dashboard
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "20px",
            marginBottom: "40px"
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
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(168,85,247,0.2)",
                borderRadius: "18px",
                padding: "30px",
                textAlign: "center"
              }}
            >
              <h2>{item[0]}</h2>
              <p style={{ color: "#94a3b8", marginTop: "10px" }}>{item[1]}</p>
            </div>
          ))}
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(168,85,247,0.2)",
            borderRadius: "18px",
            padding: "30px"
          }}
        >
          <h2 style={{ marginBottom: "25px" }}>Weekly Battle Activity</h2>

          <div style={{ display: "flex", gap: "15px", alignItems: "end", height: "220px" }}>
            {[60, 120, 90, 170, 140, 200, 160].map((height, i) => (
              <div
                key={i}
                style={{
                  width: "70px",
                  height: `${height}px`,
                  background: "linear-gradient(to top,#7c3aed,#2563eb)",
                  borderRadius: "10px 10px 0 0"
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;