import BottomImageGrid from "../components/BottomImageGrid";
import Button from "../components/Button";
import HeroSection from "../components/HeroSection";
import TopImageGrid from "../components/TopImageGrid";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col justify-start bg-white">
      <HeroSection />
      <div className="overflow-x-hidden px-0">
        <TopImageGrid />
        <BottomImageGrid />
      </div>
      <Button />
    </div>

  )
}

export default Landing;
