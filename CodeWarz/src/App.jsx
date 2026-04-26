import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Problems from "./pages/Problems";

function Home() {
  return (
    <>
      <h1>CodeWarz ⚔️</h1>
      <Link to="/problems">Go to Problems</Link>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problems" element={<Problems />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;