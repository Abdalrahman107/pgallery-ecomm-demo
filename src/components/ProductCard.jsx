import { FaShoppingCart, FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product, onAdd }) => {
  const rating = Math.round(product.rating?.rate || 4);
  return (
    <div className="relative dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-4 group transition hover:shadow-lg hover:scale-105 duration-500">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="h-36 w-full object-fill" />
        <h3 className="mt-3 font-semibold text-gray-800 dark:text-gray-100 text-sm truncate">{product.title}</h3>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) =>
            i < rating ? (
              <FaStar key={i} className="text-yellow-400 text-sm" />
            ) : (
              <FaRegStar key={i} className="text-gray-300 text-sm" />
            )
          )}
          <span className="ml-1 text-xs text-gray-500">({product.rating?.count || 4})</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-teal-600 font-bold">${product.price}</span>
        </div>
      </Link>
      <button
        onClick={() => {
          onAdd(product);
        }}
        className="cursor-pointer absolute bottom-3 right-3 bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-md shadow-md transition">
        <FaShoppingCart />
      </button>
    </div>
  );
};

export default ProductCard;
