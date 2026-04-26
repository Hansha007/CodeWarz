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
          padding: "130px 70px",
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: "30px"
        }}
      >
        <div>
          <p style={{ color: "#8b9cff", letterSpacing: "3px" }}>ENTERED BATTLE ZONE</p>

          <h1 style={{ fontSize: "50px", margin: "20px 0" }}>
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
              marginBottom: "20px"
            }}
          >
            Difficulty: {selectedProblem.difficulty}
          </p>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(168,85,247,0.2)",
              borderRadius: "18px",
              padding: "25px",
              marginBottom: "20px"
            }}
          >
            <h3>Description</h3>
            <p style={{ color: "#94a3b8", marginTop: "10px" }}>
              {selectedProblem.description}
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(168,85,247,0.2)",
              borderRadius: "18px",
              padding: "25px"
            }}
          >
            <h3>Example Test Case</h3>
            <p style={{ marginTop: "10px" }}>Input: {selectedProblem.exampleInput}</p>
            <p>Output: {selectedProblem.exampleOutput}</p>
            <p style={{ color: "#8b9cff", marginTop: "15px" }}>Reward: +50 XP</p>
          </div>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(168,85,247,0.2)",
            borderRadius: "18px",
            padding: "25px",
            minHeight: "500px"
          }}
        >
          <h3 style={{ marginBottom: "20px" }}>Code Editor Simulation</h3>

          <textarea
            placeholder="// write your legendary solution here..."
            style={{
              width: "100%",
              height: "300px",
              background: "#050816",
              color: "#8b9cff",
              border: "1px solid #312e81",
              borderRadius: "12px",
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
              borderRadius: "10px",
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