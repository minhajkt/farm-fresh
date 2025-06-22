import { Bell, MapPin, Search, SlidersHorizontal, Leaf } from "lucide-react";
import { useFormContext } from "../context/FormContext";

const HeaderWithSearch = ({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) => {
  const { location } = useFormContext();
  // console.log('loc', location)
  return(
  <div className="relative bg-green-50 sticky top-0 z-100 shadow-sm  ">
    <Leaf className="hidden sm:block w-16 h-15 text-green-500 absolute top-10 left-12" />

    <div className="px-4 sm:px-10 max-w-7xl mx-auto py-4">
      <div className="mb-1">
        <h2 className="text-xl font-semibold text-gray-800">
          Fresh from Farmers, Straight to You!
        </h2>
      </div>

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 text-green-600 mr-1" />
          <span className="truncate">Delivering to {location}</span>
        </div>
        <div className="relative">
          <Bell className="w-5 h-5 text-gray-600 -mt-5" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-yellow-400 ring-2 ring-white -mt-5"></span>
        </div>
      </div>

      <div>
        <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 shadow-sm">
          <Search className="w-4 h-4 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Find fresh, farm-direct produce..."
            className="flex-grow bg-transparent focus:outline-none text-sm"
            onChange={(e) => onSearch(e.target.value)}
          />
          <SlidersHorizontal className="w-4 h-4 text-gray-500 ml-2" />
        </div>
      </div>
    </div>
  </div>
);
}
export default HeaderWithSearch;
