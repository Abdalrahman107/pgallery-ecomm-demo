import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../api/products";
import FilterBar from "../components/FilterBar";
import Loader from "./Loader";
import toast from "react-hot-toast";
import { useCartStore } from "../store/useCartStore";

const Products = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setLoading(false);
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        setError("❌ Failed to load products. Please try again.");
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let tempProducts = [...products];
    if (selectedCategory) {
      tempProducts = tempProducts.filter((p) => p.category === selectedCategory);
    }

    if (sortBy === "priceLow") {
      tempProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceHigh") {
      tempProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      tempProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    } else if (sortBy === "name") {
      tempProducts.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredProducts(tempProducts);
  }, [selectedCategory, sortBy, products]);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`success - added to cart 🛒`);
  };

  if (error)
    return (
      <div className="flex flex-col items-center justify-center h-[50vh] text-center">
        <p className="text-red-500 text-lg font-semibold">{error}</p>
      </div>
    );
  if (loading)
    return (
      <div className="text-center mt-10">
        <Loader />
      </div>
    );

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-center mb-6 dark:text-white">Products</h2>

      <FilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[95%] mx-auto mt-6">
        {filteredProducts?.map((product) => {
          return <ProductCard key={product.id} product={product} onAdd={handleAddToCart} />;
        })}
      </div>
    </div>
  );
};

export default Products;
