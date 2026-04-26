import Navbar from "../components/Navbar";

function Leaderboard() {
  const warriors = [
    { name: "ShadowCoder", xp: "3200 XP", rank: "#1" },
    { name: "BugSlayer", xp: "2950 XP", rank: "#2" },
    { name: "AlgoKing", xp: "2800 XP", rank: "#3" },
    { name: "ByteHunter", xp: "2600 XP", rank: "#4" },
    { name: "SyntaxSamurai", xp: "2450 XP", rank: "#5" }
  ];

  return (
    <>
      <Navbar />

      <div style={{ padding: "130px 70px", minHeight: "100vh" }}>
        <p style={{ color: "#8b9cff", letterSpacing: "3px" }}>GLOBAL DOMINATION BOARD</p>

        <h1 style={{ fontSize: "55px", margin: "20px 0 40px 0" }}>
          Top Warriors Ranking
        </h1>

        {warriors.map((warrior, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(168,85,247,0.2)",
              borderRadius: "18px",
              padding: "25px 30px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div>
              <h2>{warrior.name}</h2>
              <p style={{ color: "#94a3b8" }}>{warrior.xp}</p>
            </div>

            <h2 style={{ color: "#8b5cf6" }}>{warrior.rank}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default Leaderboard;