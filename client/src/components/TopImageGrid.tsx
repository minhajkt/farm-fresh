const TopImageGrid = () => (
  <div className="grid grid-cols-10 gap-2 sm:gap-5 px-0 sm:mb-5 mt-2 sm:mt-4">
    <div className="col-span-3 sm:col-span-2">
      <img
        src="/images/carry.jpg"
        alt="img1"
        loading="lazy"
        className="rounded-r-3xl rounded-l-none w-full h-[110px] sm:h-[250px] object-cover hover-zoom"
      />
    </div>
    <div className="col-span-4 sm:col-span-3">
      <img
        src="/images/delivery.jpeg"
        alt="img2"
        loading="lazy"
        className="top-mid-images hover-zoom"
      />
    </div>
    <div className="hidden sm:block sm:col-span-3">
      <img
        src="/images/paddy.png"
        alt="img3"
        loading="lazy"
        className="top-mid-images hover-zoom"
      />
    </div>
    <div className="col-span-3 sm:col-span-2">
      <img
        src="/images/strawberry.jpeg"
        alt="img4"
        loading="lazy"
        className="rounded-r-none rounded-l-3xl w-full h-[110px] sm:h-[250px] object-cover hover-zoom"
      />
    </div>
  </div>
);

export default TopImageGrid;
