import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import HowItWorks from "../components/HowItWorks";
import AboutCodeWarz from "../components/AboutCodeWarz";
import DailyChallenge from "../components/DailyChallenge";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <HowItWorks />
      <AboutCodeWarz />
      <DailyChallenge />
      <FinalCTA />
      <Footer />

    </>
  );
}

export default Home;