const PromoBanner = () => (
  <div className="space-y-4">
    <div className="relative bg-green-600 rounded-xl text-white overflow-hidden min-h-[160px] px-4 py-4 sm:py-6 md:min-h-[200px] md:py-8 lg:min-h-[240px] lg:py-10">
      <div className="absolute bottom-[-80px] right-[-20px] sm:bottom-[-60px] sm:right-[60px] w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] bg-yellow-400 rounded-full z-0" />
      <div
        className="max-w-[60%] z-10 relative 
  text-sm sm:text-base md:text-lg lg:text-xl 
  space-y-2 sm:space-y-2.5 md:space-y-3"
      >
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
          Bridging the Gap Between Farmers & You.
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">
          Cut out the middlemen. Support local farmers.
        </p>
        <button
          className="mt-2 
    bg-yellow-400 text-black font-semibold 
    py-1.5 px-3 sm:py-2 sm:px-4 
    md:py-2.5 md:px-5 lg:py-3 lg:px-6 
    rounded-full hover:bg-yellow-500 
    transition text-xs sm:text-sm md:text-base lg:text-lg"
        >
          Shop Fresh Now
        </button>
      </div>

      <img
        src="/images/ffff.png"
        alt="Farmer"
        className="absolute bottom-0 -right-8 w-58 sm:w-68 md:w-90 sm:right-0 object-contain"
      />
    </div>

    <div className="relative bg-yellow-400 rounded-xl text-black overflow-hidden min-h-[140px] px-4 py-4 sm:py-6 md:min-h-[180px] md:py-8 lg:min-h-[200px] lg:py-10">
      <div className="absolute bottom-[-60px] right-[-30px] w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] bg-orange-300 rounded-full z-0 opacity-50" />

      <div
        className="max-w-[60%] z-10 relative
    text-sm sm:text-base md:text-lg lg:text-xl
    space-y-2 sm:space-y-2.5 md:space-y-3"
      >
        <p className="text-xs sm:text-lg md:text-md lg:text-xl font-medium">
          FARM FRESH
        </p>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
          Summer Picks!
        </h2>
        <p className="text-sm sm:text-sm md:text-base lg:text-lg">
          Get <span className="font-bold bg-black text-yellow-400 p-0.5">20% OFF</span> on Mangoes, Watermelon
          & more.
        </p>
      </div>

      <img
        src="/images/fruits.png"
        alt="Fruits"
        className="absolute -bottom-2 -right-8 w-30 sm:w-50 md:w-50 sm:right-8 object-contain"
      />
    </div>
  </div>
);

export default PromoBanner;
