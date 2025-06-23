import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import HeroSection from "../components/HeroSection";
// import TopImageGrid from "../components/TopImageGrid";
import React, { Suspense, } from "react";
import { Leaf } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();
  const LazyTopImageGrid = React.lazy(
    () => import("../components/TopImageGrid")
  );
  const LazyBottomImageGrid = React.lazy(
    () => import("../components/BottomImageGrid")
  );


  const handleContinue = () => {
    navigate("/language");
  };
  return (
    <div className="min-h-screen flex flex-col justify-start bg-white relative">
      <HeroSection />
      <div className="overflow-x-hidden px-0">
        <Suspense
          fallback={
            <div className="min-h-[200px] flex items-center justify-center">
              <Leaf className="w-12 h-12 text-green-600 animate-spin" />
            </div>
          }
        >
          <LazyTopImageGrid />
          <LazyBottomImageGrid />
      <Button onClick={handleContinue} />
        </Suspense>
      </div>
    </div>
  );
}

export default Landing;
