import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, clearCart, addToCart, decreaseQty } = useCartStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="w-[95%] mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-300">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white dark:bg-gray-800 shadow p-4 rounded-lg">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                  <div>
                    <h3 className="font-semibold dark:text-white">{item.title}</h3>
                    <p className="text-gray-500 dark:text-gray-300">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="cursor-pointer p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded dark:text-white">
                    <FaMinus size={12} />
                  </button>

                  <span className="text-lg font-bold dark:text-white">{item.qty}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="cursor-pointer p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded dark:text-white">
                    <FaPlus size={12} />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="cursor-pointer ml-3 p-2 bg-red-500 hover:bg-red-600 text-white rounded">
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg shadow dark:text-white">
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
              onClick={() => {
                clearCart();
                navigate("/checkout-success");
              }}
              className="mt-4 w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 cursor-pointer">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
