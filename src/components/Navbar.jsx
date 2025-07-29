import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import DarkLightIcon from "./DarkLightIcon";

import { MdShoppingBasket } from "react-icons/md";
import { useCartStore } from "../store/useCartStore";

const Navbar = () => {
  const cartCount = useCartStore((state) => state.cart.length);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky z-50 top-0 left-0 right-0 bg-gray-100 dark:bg-gray-900 dark:text-white shadow-lg">
      <div className="w-[95%] mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-1 text-2xl">
            <MdShoppingBasket className="text-teal-500 text-4xl" />
            <h1 className="font-bold">
              P<span className="text-teal-500">Gallery</span>.
            </h1>
          </Link>

          <ul className="hidden md:flex items-center gap-4 text-sm font-medium uppercase">
            <li>
              <Link to="/" className="hover:text-teal-500 transition-colors duration-200">
                Home
              </Link>
            </li>

            <li>
              <Link to="/cart">
                <div className="relative flex items-center gap-2 hover:text-teal-500 transition-colors duration-200 pr-3 py-2 rounded-lg">
                  <FaShoppingCart className="text-lg" />
                  <span className="text-sm font-semibold">Cart</span>

                  <span className="absolute -top-2 -right-2 text-white bg-teal-500 text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <DarkLightIcon />
          <button className="text-2xl md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden p-3 bg-gray-200 dark:bg-gray-800">
          <ul className="flex flex-col gap-2 text-sm uppercase text-center">
            <li>
              <Link to="/" className="hover:text-teal-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <div className="relative flex justify-center items-center gap-2 hover:text-teal-500 transition-colors duration-200 pr-3 py-2 rounded-lg">
                  <FaShoppingCart className="text-lg" />
                  <span className="text-sm font-semibold">Cart</span>

                  <span className="absolute -top-2 left-[55%] text-white bg-teal-500 text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
