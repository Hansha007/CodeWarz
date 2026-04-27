import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import problems from "../data/problems";
import { useState } from "react";

function ProblemDetail() {
  const { id } = useParams();
  const selectedProblem = problems.find((p) => p.id === parseInt(id));
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    setMessage("✅ Solution Accepted! +50 XP Earned");
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "140px 70px",
          minHeight: "100vh",
          width: "88%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "1.05fr 1fr",
          gap: "28px"
        }}
      >
        <div>
          <p style={{ color: "#8b9cff", letterSpacing: "3px" }}>ENTERED BATTLE ZONE</p>

          <h1 style={{ fontSize: "50px", margin: "18px 0" }}>
            {selectedProblem.title}
          </h1>

          <p
            style={{
              color:
                selectedProblem.difficulty === "Easy"
                  ? "#22c55e"
                  : selectedProblem.difficulty === "Medium"
                  ? "#facc15"
                  : "#ef4444",
              marginBottom: "22px"
            }}
          >
            Difficulty: {selectedProblem.difficulty}
          </p>

          <div
            style={{
              background: "rgba(255,255,255,0.035)",
              border: "1px solid rgba(124,58,237,0.16)",
              borderRadius: "22px",
              padding: "28px",
              marginBottom: "20px",
              backdropFilter: "blur(10px)"
            }}
          >
            <h3>Description</h3>
            <p style={{ color: "#94a3b8", marginTop: "12px", lineHeight: "1.8" }}>
              {selectedProblem.description}
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.035)",
              border: "1px solid rgba(124,58,237,0.16)",
              borderRadius: "22px",
              padding: "28px",
              backdropFilter: "blur(10px)"
            }}
          >
            <h3>Example Test Case</h3>
            <p style={{ marginTop: "12px" }}>Input: {selectedProblem.exampleInput}</p>
            <p style={{ marginTop: "8px" }}>Output: {selectedProblem.exampleOutput}</p>
            <p style={{ color: "#8b9cff", marginTop: "15px" }}>Reward: +50 XP</p>
          </div>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.035)",
            border: "1px solid rgba(124,58,237,0.16)",
            borderRadius: "22px",
            padding: "28px",
            backdropFilter: "blur(10px)"
          }}
        >
          <h3 style={{ marginBottom: "20px" }}>Code Editor Simulation</h3>

          <textarea
            placeholder="// write your legendary solution here..."
            style={{
              width: "100%",
              height: "320px",
              background: "#020617",
              color: "#8b9cff",
              border: "1px solid rgba(124,58,237,0.2)",
              borderRadius: "14px",
              padding: "20px",
              fontSize: "15px",
              outline: "none"
            }}
          />

          <button
            onClick={handleSubmit}
            style={{
              marginTop: "20px",
              padding: "12px 25px",
              background: "linear-gradient(to right,#7c3aed,#2563eb)",
              border: "none",
              color: "white",
              borderRadius: "12px",
              cursor: "pointer"
            }}
          >
            Submit Solution
          </button>

          {message && (
            <p style={{ marginTop: "20px", color: "#22c55e", fontWeight: "bold" }}>
              {message}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default ProblemDetail;