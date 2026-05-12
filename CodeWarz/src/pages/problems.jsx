import Navbar from "../components/Navbar";
import problems from "../data/problems";
import { Link } from "react-router-dom";
import { useState } from "react";

function Problems() {

  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");

  const filteredProblems = problems.filter((problem) => {

    const matchesSearch =
      problem.title.toLowerCase().includes(search.toLowerCase());

    const matchesDifficulty =
      difficulty === "All" || problem.difficulty === difficulty;

    return matchesSearch && matchesDifficulty;
  });

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "140px 70px",
          minHeight: "100vh",
          width: "88%",
          margin: "auto"
        }}
      >

        {/* TOP TEXT */}

        <p
          style={{
            color: "#8b9cff",
            letterSpacing: "3px",
            marginBottom: "15px"
          }}
        >
          CHOOSE YOUR BATTLE
        </p>

        <h1
          style={{
            fontSize: "58px",
            marginBottom: "40px"
          }}
        >
          Code Challenges Arena
        </h1>

        {/* SEARCH + FILTERS */}

        <div
          style={{
            display: "flex",
            gap: "18px",
            marginBottom: "45px",
            flexWrap: "wrap",
            alignItems: "center"
          }}
        >

          {/* SEARCH BAR */}

          <input
            type="text"
            placeholder="Search problems..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flex: "1",
              minWidth: "280px",

              background: "rgba(255,255,255,0.04)",

              border: "1px solid rgba(124,58,237,0.18)",

              borderRadius: "14px",

              padding: "14px 18px",

              color: "white",

              outline: "none",

              fontSize: "15px",

              backdropFilter: "blur(10px)"
            }}
          />

          {/* FILTER BUTTONS */}

          {["All", "Easy", "Medium", "Hard"].map((level) => (

            <button
              key={level}
              onClick={() => setDifficulty(level)}
              style={{
                padding: "12px 26px",

                border:
                  difficulty === level
                    ? "1px solid #8b5cf6"
                    : "1px solid rgba(255,255,255,0.08)",

                background:
                  difficulty === level
                    ? "linear-gradient(to right,#7c3aed,#2563eb)"
                    : "rgba(255,255,255,0.03)",

                color: "white",

                borderRadius: "999px",

                cursor: "pointer",

                fontSize: "14px",

                transition: "0.3s ease"
              }}
            >
              {level}
            </button>

          ))}

        </div>

        {/* PROBLEMS LIST */}

        {filteredProblems.map((problem) => (

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

              alignItems: "center",

              flexWrap: "wrap",

              gap: "20px"
            }}
          >

            {/* LEFT */}

            <div>

              <h2
                style={{
                  marginBottom: "10px",
                  fontSize: "24px"
                }}
              >
                {problem.title}
              </h2>

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

              <p
                style={{
                  marginTop: "10px",
                  color: "#94a3b8"
                }}
              >
                Reward: +50 XP
              </p>

            </div>

            {/* BUTTON */}

            <Link to={`/problems/${problem.id}`}>

              <button
                style={{
                  padding: "12px 38px",

                  background:
                    "linear-gradient(to right,#7c3aed,#2563eb)",

                  border: "none",

                  borderRadius: "12px",

                  color: "white",

                  cursor: "pointer",

                  fontSize: "14px",

                  fontWeight: "600"
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