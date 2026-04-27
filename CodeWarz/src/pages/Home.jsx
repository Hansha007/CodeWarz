import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import HowItWorks from "../components/HowItWorks";

function Home() {
  return (
    <div>
      <Navbar />

      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          paddingTop: "90px"
        }}
      >
        <HeroSection />
        <StatsSection />
        <HowItWorks />
      </div>
    </div>
  );
}

export default Home;