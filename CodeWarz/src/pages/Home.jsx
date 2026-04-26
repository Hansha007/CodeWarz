import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import HowItWorks from "../components/HowItWorks";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <HowItWorks />
    </div>
  );
}

export default Home;