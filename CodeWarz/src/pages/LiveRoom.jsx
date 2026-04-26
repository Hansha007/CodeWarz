import Navbar from "../components/Navbar";

function LiveRoom() {
  const coders = ["ShadowCoder", "AlgoKing", "ByteHunter", "BugSlayer"];

  return (
    <>
      <Navbar />

      <div style={{ padding: "130px 70px", minHeight: "100vh" }}>
        <p style={{ color: "#8b9cff", letterSpacing: "3px" }}>REAL TIME WAR ARENA</p>

        <h1 style={{ fontSize: "55px", margin: "20px 0 40px 0" }}>
          Live Coding Battle Room
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "25px"
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(168,85,247,0.2)",
              borderRadius: "18px",
              padding: "25px"
            }}
          >
            <h2>Battle Timer: 14:32</h2>
            <p style={{ color: "#94a3b8", marginTop: "10px" }}>
              Current Challenge: Maximum Subarray
            </p>

            <h3 style={{ marginTop: "30px" }}>Active Warriors</h3>

            {coders.map((coder, index) => (
              <p key={index} style={{ marginTop: "10px" }}>
                🟢 {coder}
              </p>
            ))}
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(168,85,247,0.2)",
              borderRadius: "18px",
              padding: "25px"
            }}
          >
            <h2>Battle Chat</h2>

            <div style={{ marginTop: "20px", color: "#94a3b8", lineHeight: "2" }}>
              <p>ShadowCoder: I'm almost done 😈</p>
              <p>AlgoKing: test case 4 is tricky</p>
              <p>ByteHunter: pushing final submit...</p>
              <p>BugSlayer: nooo runtime error 💀</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LiveRoom;