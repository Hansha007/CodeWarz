import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Problems from "./pages/problems";
import ProblemDetail from "./pages/ProblemDetail";
import Dashboard from "./pages/Dashboard";
import Leaderboard from "./pages/Leaderboard";
import LiveRoom from "./pages/LiveRoom";
import Login from "./pages/login";
import DailyChallengePage from "./pages/DailyChallengePage";
import Matchmaking from "./pages/matchMaking";
import PrivateRoom from "./pages/PrivateRoom";
import JoinRoom from "./pages/JoinRoom";
import Tournaments from "./pages/Tournaments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/problems/:id" element={<ProblemDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/liveroom" element={<LiveRoom />} />
        <Route path="/login" element={<Login />} />
        <Route path="/daily-challenge" element={<DailyChallengePage />} />
        <Route path="/matchmaking" element={<Matchmaking />} />
        <Route path="/private-room" element={<PrivateRoom />} />
        <Route path="/join-room" element={<JoinRoom />} />
        <Route path="/tournaments" element={<Tournaments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;