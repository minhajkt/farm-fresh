import { useState, useEffect } from "react";
import ImageWithLoader from "./ImageWithLoader";

const TOTAL_BOTTOM_IMAGES = 5; 

const BottomImageGrid = () => {
  const [loadedImageCount, setLoadedImageCount] = useState(0);
  const [gridFullyLoaded, setGridFullyLoaded] = useState(false);

  useEffect(() => {
    if (loadedImageCount === TOTAL_BOTTOM_IMAGES) {
      setGridFullyLoaded(true);
    }
  }, [loadedImageCount]);

  const handleImageLoaded = () => {
    setLoadedImageCount((prevCount) => prevCount + 1);
  };

  const BottomGridSkeleton = () => (
    <div className="grid grid-cols-6 sm:grid-cols-8 gap-2 sm:gap-5 px-0 mb-2 sm:mb-5 mt-2 sm:mt-5 animate-pulse">
      <div className="col-span-1 sm:col-span-1 bg-gray-200 rounded-r-3xl h-[90px] sm:h-[200px]"></div>
      <div className="col-span-2 sm:col-span-2 bg-gray-200 rounded-md h-[90px] sm:h-[200px]"></div>
      <div className="hidden sm:block sm:col-span-2 bg-gray-200 rounded-md h-[90px] sm:h-[200px]"></div>
      <div className="col-span-2 sm:col-span-2 bg-gray-200 rounded-md h-[90px] sm:h-[200px]"></div>
      <div className="col-span-1 sm:col-span-1 bg-gray-200 rounded-l-3xl h-[90px] sm:h-[200px]"></div>
    </div>
  );

  return (
    <>
      {!gridFullyLoaded && <BottomGridSkeleton />}{" "}
      <div
        className={`grid grid-cols-6 sm:grid-cols-8 gap-2 sm:gap-5 px-0 mb-2 sm:mb-5 mt-2 sm:mt-5 transition-opacity duration-500 ${
          gridFullyLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="col-span-1 sm:col-span-1">
          <div className="w-full h-[90px] sm:h-[200px]">
            <ImageWithLoader
              src="/images/farmer.jpg"
              alt="img4"
              className="rounded-r-3xl rounded-l-none w-full h-full object-cover hover-zoom"
              onLoaded={handleImageLoaded}
            />
          </div>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <div className="w-full h-[90px] sm:h-[200px]">
            <ImageWithLoader
              src="/images/tractor.jpg"
              alt="img5"
              className="bottom-mid-images w-full h-full object-cover hover-zoom"
              onLoaded={handleImageLoaded}
            />
          </div>
        </div>
        <div className="hidden sm:block sm:col-span-2">
          <div className="w-full h-[90px] sm:h-[200px]">
            <ImageWithLoader
              src="/images/farm.jpg"
              alt="img6"
              className="bottom-mid-images w-full h-full object-cover hover-zoom"
              onLoaded={handleImageLoaded}
            />
          </div>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <div className="w-full h-[90px] sm:h-[200px]">
            <ImageWithLoader
              src="/images/basket.jpg"
              alt="img7"
              className="bottom-mid-images w-full h-full object-cover hover-zoom"
              onLoaded={handleImageLoaded}
            />
          </div>
        </div>
        <div className="col-span-1 sm:col-span-1">
          <div className="w-full h-[90px] sm:h-[200px]">
            <ImageWithLoader
              src="/images/farm2.jpg"
              alt="img8"
              className="rounded-r-none rounded-l-3xl w-full h-full object-cover hover-zoom"
              onLoaded={handleImageLoaded}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomImageGrid;
