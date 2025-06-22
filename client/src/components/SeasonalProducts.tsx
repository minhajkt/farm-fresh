import { useEffect, useState } from "react";
import { getProducts } from "../services/products";
import type { Product } from "../types/auth.types";

const SeasonalProducts = ({ searchQuery }: { searchQuery: string }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredItems =
    searchQuery.trim() === ""
      ? products
      : products.filter((item) =>
          item.item.toLowerCase().includes(searchQuery.toLowerCase())
        );

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Seasonal Produce</h3>

      <div className="flex sm:grid sm:grid-cols-4 gap-4 overflow-x-auto sm:overflow-visible scrollbar-hide">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              key={item._id}
              className="min-w-[160px] sm:min-w-0 bg-white border rounded-xl hover-zoom overflow-hidden shadow-sm hover:shadow-md transition flex-shrink-0 sm:h-[280px] lg:h-[320px]"
            >
              <img
                src={item.imageUrl} 
                alt={item.item}
                className="w-full h-28 sm:h-36 lg:h-50 object-cover border-b border-b-gray-300"
              />
              <div className="p-2 sm:p-3 lg:p-4 space-y-1 text-center">
                <div className="font-medium text-sm sm:text-base lg:text-lg">
                  {item.item}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  ₹ {item.price}/kg 
                </div>
                <button className="mt-1 w-full bg-green-600 text-white text-xs sm:text-sm lg:text-base py-1.5 rounded hover:bg-green-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No matching items found.</p>
        )}
      </div>
    </div>
  );
};

export default SeasonalProducts;
