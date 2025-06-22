import { useNavigate } from "react-router-dom";
import BottomImageGrid from "../components/BottomImageGrid";
import Button from "../components/Button";
import HeroSection from "../components/HeroSection";
import TopImageGrid from "../components/TopImageGrid";
import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    navigate("/language");
  };
  return (
    <div className="min-h-screen flex flex-col justify-start bg-white relative">
      {loading && (
        <div className="fixed bg-green-100 inset-0 z-50 flex items-center justify-center  backdrop-blur-sm">
          <Leaf className="w-12 h-12 text-green-600 animate-spin" />
        </div>
      )}

      {!loading && (
        <>
          <HeroSection />
          <div className="overflow-x-hidden px-0">
            <TopImageGrid />
            <BottomImageGrid />
          </div>
          <Button onClick={handleContinue} />
        </>
      )}
    </div>
  );
}

export default Landing;
