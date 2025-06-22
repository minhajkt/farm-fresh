import PromoBanner from "../components/PromoBanner";
import SearchBar from "../components/SearchBar";
import SeasonalProducts from "../components/SeasonalProducts";
import NavItems from "../components/NavItems";
import { useState } from "react";


const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <SearchBar onSearch={setSearchTerm} />
      <NavItems />
      <div className="pt-2 pb-24 sm:pb-10 px-4 sm:px-10">
        <PromoBanner />
        <SeasonalProducts searchQuery={searchTerm} />
      </div>
    </div>
  );
}

export default HomePage