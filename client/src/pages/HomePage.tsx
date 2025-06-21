import PromoBanner from "../components/PromoBanner";
import SearchBar from "../components/SearchBar";
import SeasonalProducts from "../components/SeasonalProducts";
import NavItems from "../components/NavItems";


const HomePage = () => {

  return (
    <div className="min-h-screen bg-gray-50">
        <SearchBar />
      <NavItems />
      <div className="pt-2 pb-24 sm:pb-10 px-4 sm:px-10">
        <PromoBanner />
        <SeasonalProducts />
      </div>
    </div>
  );
}

export default HomePage