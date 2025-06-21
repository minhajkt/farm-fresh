const HeroSection = () => (
  <div className="relative px-5 sm:px-10 pt-4 sm:pt-10 pb-4 sm:pb-10 bg-green-600 overflow-hidden">
    <h1 className="text-white text-2xl sm:text-4xl font-bold leading-tight">
      <span className="text-yellow-300">Fresh</span> from <br />
      <span className="flex items-center gap-2">
        Farmer to
        <img
          src="/images/lgr.png"
          alt="farm logo"
          className="h-6 sm:h-8 w-6 sm:w-8 object-contain"
        />
      </span>
      Your Doorstep
    </h1>
    <p className="text-white mt-2 sm:mt-4 text-base font-light">
      Shop directly from local farmers and enjoy fresh, organic produce at fair
      prices.
    </p>
  </div>
);

export default HeroSection;
