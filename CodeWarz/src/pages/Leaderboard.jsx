import Navbar from "../components/Navbar";

function Leaderboard() {
  const warriors = [
    ["#1", "ShadowCoder", "3200 XP", "Legendary Master"],
    ["#2", "BugSlayer", "3010 XP", "Grand Warrior"],
    ["#3", "AlgoKing", "2870 XP", "Grand Warrior"],
    ["#4", "ByteHunter", "2650 XP", "Elite Warrior"],
    ["#5", "SyntaxSamurai", "2490 XP", "Elite Warrior"],
    ["#27", "Hansha_007", "750 XP", "Rising Fighter"]
  ];

  return (
    <>
      <Navbar />

      <div style={{ padding: "130px 0 60px 0", width: "88%", margin: "auto", minHeight: "100vh" }}>
        <p style={{ color: "#8b9cff", letterSpacing: "3px" }}>GLOBAL DOMINATION BOARD</p>

        <h1 style={{ fontSize: "52px", margin: "18px 0 35px 0" }}>
          Warrior Rankings
        </h1>

        {/* top 3 elite cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginBottom: "30px"
        }}>
          {warriors.slice(0,3).map((warrior, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(124,58,237,0.16)",
              borderRadius: "22px",
              padding: "30px",
              textAlign: "center"
            }}>
              <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>{warrior[0]}</h1>
              <h2>{warrior[1]}</h2>
              <p style={{ color: "#8b9cff", margin: "10px 0" }}>{warrior[2]}</p>
              <p style={{ color: "#94a3b8" }}>{warrior[3]}</p>
            </div>
          ))}
        </div>

        {/* full table */}
        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(124,58,237,0.16)",
          borderRadius: "22px",
          padding: "20px"
        }}>
          {warriors.map((warrior, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr 180px 220px",
              padding: "18px 15px",
              borderBottom: i !== warriors.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
              alignItems: "center"
            }}>
              <h3>{warrior[0]}</h3>
              <h3>{warrior[1]}</h3>
              <p style={{ color: "#8b9cff" }}>{warrior[2]}</p>
              <p style={{ color: "#94a3b8" }}>{warrior[3]}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Leaderboard;