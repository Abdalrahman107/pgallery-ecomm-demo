import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../api/products";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import { useCartStore } from "../store/useCartStore";

const ProductDetails = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await getProductById(id);
        setLoading(false);
        setProduct(res);
      } catch (error) {
        setError("❌ Failed to load product. Please try again.");
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

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
  if (!product) return <p className="text-center mt-10">Product not found.</p>;

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`success - added to cart 🛒`);
  };

  return (
    <div className="w-[95%] mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-[350px] h-[350px] object-contain rounded-lg shadow-lg"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-3 dark:text-white">{product.title}</h1>
        <p className="text-gray-500 dark:text-gray-200 text-sm mb-2 capitalize">{product.category}</p>
        <p className="text-gray-700 dark:text-gray-400 mb-4">{product.description}</p>
        <div className="text-2xl font-bold text-teal-600 mb-4">${product.price}</div>
        <button
          onClick={() => {
            handleAddToCart(product);
          }}
          className={`cursor-pointer bg-teal-600 text-white px-6 py-3 rounded-lg shadow hover:bg-teal-700 transition mb-5`}>
          Add to Cart
        </button>
        <div>
          <Link to="/" className="text-teal-500 hover:underline">
            ← Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
