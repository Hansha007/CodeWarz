import Navbar from "../components/Navbar";

function LiveRoom() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "130px 0 60px 0", width: "88%", margin: "auto", minHeight: "100vh" }}>
        <p style={{ color: "#8b9cff", letterSpacing: "3px" }}>LIVE MULTIPLAYER COMBAT ZONE</p>

        <h1 style={{ fontSize: "52px", margin: "18px 0 35px 0" }}>
          Warrior Arena
        </h1>

        {/* top live duel panel */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 120px 1fr",
            gap: "20px",
            marginBottom: "25px"
          }}
        >
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(124,58,237,0.16)",
            borderRadius: "22px",
            padding: "25px"
          }}>
            <h2>⚔ Hansha_007</h2>
            <p style={{ color: "#94a3b8", margin: "12px 0" }}>Current XP: 750</p>
            <p style={{ color: "#22c55e" }}>Solved Test Cases: 8/10</p>
            <p style={{ color: "#8b9cff", marginTop: "12px" }}>Typing Speed: 62 WPM</p>
          </div>

          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "46px",
            fontWeight: "bold"
          }}>
            VS
          </div>

          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(124,58,237,0.16)",
            borderRadius: "22px",
            padding: "25px"
          }}>
            <h2>⚔ CodeNinja_X</h2>
            <p style={{ color: "#94a3b8", margin: "12px 0" }}>Current XP: 810</p>
            <p style={{ color: "#ef4444" }}>Solved Test Cases: 6/10</p>
            <p style={{ color: "#8b9cff", marginTop: "12px" }}>Typing Speed: 58 WPM</p>
          </div>
        </div>

        {/* center arena battle feed */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: "20px",
          marginBottom: "25px"
        }}>
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(124,58,237,0.16)",
            borderRadius: "22px",
            padding: "25px"
          }}>
            <h2 style={{ marginBottom: "20px" }}>Live Battle Console</h2>

            <div style={{
              height: "280px",
              background: "#050816",
              borderRadius: "18px",
              padding: "18px",
              color: "#22c55e",
              lineHeight: "2"
            }}>
              {"> Connecting warriors..."}<br/>
              {"> Loading coding battlefield..."}<br/>
              {"> Problem: Longest Substring Without Repeat"}<br/>
              {"> Hansha_007 submitted testcase #8"}<br/>
              {"> CodeNinja_X failed testcase #6"}<br/>
              {"> XP boost activated..."}<br/>
              {"> Sudden death mode begins..."}
            </div>
          </div>

          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(124,58,237,0.16)",
            borderRadius: "22px",
            padding: "25px"
          }}>
            <h2 style={{ marginBottom: "18px" }}>Battle Rewards</h2>

            <div style={{ display: "grid", gap: "14px" }}>
              <div style={{ padding: "18px", background: "rgba(255,255,255,0.03)", borderRadius: "14px" }}>🏆 Winner Reward: +120 XP</div>
              <div style={{ padding: "18px", background: "rgba(255,255,255,0.03)", borderRadius: "14px" }}>🔥 Streak Bonus: +20 XP</div>
              <div style={{ padding: "18px", background: "rgba(255,255,255,0.03)", borderRadius: "14px" }}>⚡ Speed Bonus: +15 XP</div>
            </div>
          </div>
        </div>

        {/* bottom live players */}
        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(124,58,237,0.16)",
          borderRadius: "22px",
          padding: "25px"
        }}>
          <h2 style={{ marginBottom: "18px" }}>Warriors Currently In Arena</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px" }}>
            {["ByteHunter", "AlgoQueen", "LoopMaster", "StackLegend"].map((name, i) => (
              <div key={i} style={{
                padding: "22px",
                textAlign: "center",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.03)"
              }}>
                ⚔ {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LiveRoom;