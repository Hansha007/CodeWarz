import Navbar from "../components/Navbar";
import problems from "../data/problems";
import { Link } from "react-router-dom";

function Problems() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "140px 70px", minHeight: "100vh", width: "88%", margin: "auto" }}>
        <p style={{ color: "#8b9cff", letterSpacing: "3px", marginBottom: "15px" }}>
          CHOOSE YOUR BATTLE
        </p>

        <h1 style={{ fontSize: "58px", marginBottom: "45px" }}>
          Code Challenges Arena
        </h1>

        {problems.map((problem) => (
          <div
            key={problem.id}
            style={{
              background: "rgba(255,255,255,0.035)",
              border: "1px solid rgba(124,58,237,0.16)",
              borderRadius: "22px",
              padding: "28px 30px",
              marginBottom: "22px",
              backdropFilter: "blur(10px)",
              boxShadow: "0 0 20px rgba(124,58,237,0.05)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div>
              <h2 style={{ marginBottom: "10px", fontSize: "24px" }}>{problem.title}</h2>

              <p
                style={{
                  color:
                    problem.difficulty === "Easy"
                      ? "#22c55e"
                      : problem.difficulty === "Medium"
                      ? "#facc15"
                      : "#ef4444"
                }}
              >
                Difficulty: {problem.difficulty}
              </p>

              <p style={{ marginTop: "10px", color: "#94a3b8" }}>
                Reward: +50 XP
              </p>
            </div>

            <Link to={`/problems/${problem.id}`}>
              <button
                style={{
                  padding: "12px 24px",
                  background: "linear-gradient(to right,#7c3aed,#2563eb)",
                  border: "none",
                  borderRadius: "12px",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                Enter Battle
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Problems;