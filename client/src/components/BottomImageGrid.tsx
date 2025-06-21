const BottomImageGrid = () => (
  <div className="grid grid-cols-6 sm:grid-cols-8 gap-2 sm:gap-5 px-0 mb-2 sm:mb-5 mt-2 sm:mt-5">
    <div className="col-span-1 sm:col-span-1">
      <img
        src="/images/farmer.jpg"
        alt="img4"
        className="rounded-r-3xl rounded-l-none w-full h-[90px] sm:h-[200px] object-cover hover-zoom"
      />
    </div>
    <div className="col-span-2 sm:col-span-2">
      <img
        src="/images/tractor.jpg"
        alt="img5"
        className="bottom-mid-images hover-zoom"
      />
    </div>
    <div className="hidden sm:block sm:col-span-2">
      <img
        src="/images/farm.jpg"
        alt="img6"
        className="bottom-mid-images hover-zoom"
      />
    </div>
    <div className="col-span-2 sm:col-span-2">
      <img
        src="/images/basket.jpg"
        alt="img7"
        className="bottom-mid-images hover-zoom"
      />
    </div>
    <div className="col-span-1 sm:col-span-1">
      <img
        src="/images/farm2.jpg"
        alt="img8"
        className="rounded-r-none rounded-l-3xl w-full h-[90px] sm:h-[200px] object-cover hover-zoom"
      />
    </div>
  </div>
);

export default BottomImageGrid;