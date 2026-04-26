import Navbar from "../components/Navbar";
import problems from "../data/problems";
import { Link } from "react-router-dom";

function Problems() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "140px 80px", minHeight: "100vh" }}>
        <p style={{ color: "#8b9cff", letterSpacing: "3px", marginBottom: "15px" }}>
          CHOOSE YOUR BATTLE
        </p>

        <h1 style={{ fontSize: "60px", marginBottom: "50px" }}>
          Code Challenges Arena
        </h1>

        {problems.map((problem) => (
          <div
            key={problem.id}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(168,85,247,0.2)",
              borderRadius: "18px",
              padding: "25px 30px",
              marginBottom: "20px",
              boxShadow: "0 0 15px rgba(124,58,237,0.12)"
            }}
          >
            <h2 style={{ marginBottom: "10px" }}>{problem.title}</h2>

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

            <p style={{ margin: "10px 0", color: "#94a3b8" }}>
              Reward: +50 XP
            </p>

            <Link to={`/problems/${problem.id}`}>
              <button
                style={{
                  padding: "10px 22px",
                  background: "linear-gradient(to right,#7c3aed,#2563eb)",
                  border: "none",
                  borderRadius: "10px",
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