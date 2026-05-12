import "../styles/dailychallenge.css";
import { Link } from "react-router-dom";

function DailyChallenge() {
  return (
    <section className="challenge-section">

      <div className="challenge-card">

        <p className="challenge-mini">
          TODAY'S MISSION
        </p>

        <h1 className="challenge-title">
          Longest Increasing Subsequence
        </h1>

        <p className="challenge-desc">
          Solve today's featured coding challenge and earn bonus XP
          while climbing the global warrior leaderboard.
        </p>

        <div className="challenge-info">

          <div>
            <h3>Difficulty</h3>
            <p>Hard</p>
          </div>

          <div>
            <h3>Reward</h3>
            <p>+350 XP</p>
          </div>

          <div>
            <h3>Time Left</h3>
            <p>08h 21m</p>
          </div>

        </div>

        <Link to="/daily-challenge"> 
        <button className="challenge-btn">
          START CHALLENGE
          </button>
          </Link>

      </div>

    </section>
  );
}

export default DailyChallenge;