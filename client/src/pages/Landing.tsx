import { useNavigate } from "react-router-dom";
import BottomImageGrid from "../components/BottomImageGrid";
import Button from "../components/Button";
import HeroSection from "../components/HeroSection";
import TopImageGrid from "../components/TopImageGrid";

const Landing = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/language')
  }
  return (
    <div className="min-h-screen flex flex-col justify-start bg-white">
      <HeroSection />
      <div className="overflow-x-hidden px-0">
        <TopImageGrid />
        <BottomImageGrid />
      </div>
      <Button onClick={handleContinue}/>
    </div>

  )
}

export default Landing;
