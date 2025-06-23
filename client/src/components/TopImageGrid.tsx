import React, { useState, useEffect } from "react";
import ImageWithLoader from "./ImageWithLoader";

const TOTAL_TOP_IMAGES = 4; 

const TopImageGrid = () => {
  const [loadedImageCount, setLoadedImageCount] = useState(0);
  const [gridFullyLoaded, setGridFullyLoaded] = useState(false);

  useEffect(() => {
    if (loadedImageCount === TOTAL_TOP_IMAGES) {
      setGridFullyLoaded(true);
    }
  }, [loadedImageCount]);

  const handleImageLoaded = () => {
    setLoadedImageCount((prevCount) => prevCount + 1);
  };

  const TopGridSkeleton = () => (
    <div className="grid grid-cols-10 gap-2 sm:gap-5 px-0 sm:mb-5 mt-2 sm:mt-4 animate-pulse">
      <div className="col-span-3 sm:col-span-2 bg-gray-200 rounded-r-3xl h-[110px] sm:h-[250px]"></div>
      <div className="col-span-4 sm:col-span-3 bg-gray-200 rounded-md h-[110px] sm:h-[250px]"></div>
      <div className="hidden sm:block sm:col-span-3 bg-gray-200 rounded-md h-[110px] sm:h-[250px]"></div>
      <div className="col-span-3 sm:col-span-2 bg-gray-200 rounded-l-3xl h-[110px] sm:h-[250px]"></div>
    </div>
  );

  return (
    <>
      {!gridFullyLoaded && <TopGridSkeleton />}{" "}
      <div
        className={`grid grid-cols-10 gap-2 sm:gap-5 px-0 sm:mb-5 mt-2 sm:mt-4 transition-opacity duration-500 ${
          gridFullyLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="col-span-3 sm:col-span-2">
          <div className="w-full h-[110px] sm:h-[250px]">
            <ImageWithLoader
              src="/images/carry.jpg"
              alt="img1"
              className="rounded-r-3xl rounded-l-none w-full h-full object-cover hover-zoom"
              onLoaded={handleImageLoaded} 
            />
          </div>
        </div>
        <div className="col-span-4 sm:col-span-3">
          <div className="w-full h-[110px] sm:h-[250px]">
            <ImageWithLoader
              src="/images/delivery.jpeg"
              alt="img2"
              className="top-mid-images w-full h-full object-cover hover-zoom"
              onLoaded={handleImageLoaded} 
            />
          </div>
        </div>
        <div className="hidden sm:block sm:col-span-3">
          <div className="w-full h-[110px] sm:h-[250px]">
            <ImageWithLoader
              src="/images/paddy.png"
              alt="img3"
              className="top-mid-images w-full h-full object-cover hover-zoom"
              onLoaded={handleImageLoaded} 
            />
          </div>
        </div>
        <div className="col-span-3 sm:col-span-2">
          <div className="w-full h-[110px] sm:h-[250px]">
            <ImageWithLoader
              src="/images/strawberry.jpeg"
              alt="img4"
              className="rounded-r-none rounded-l-3xl w-full h-full object-cover hover-zoom"
              onLoaded={handleImageLoaded} 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopImageGrid;
