import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MainLayout from "./Layouts/MainLayout";
import ProductDetails from "./pages/ProductDetails";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/NotFound";
import CheckOutSuccess from "./pages/CheckOutSuccess";



function App() {
  return (
    <CartProvider>
       <Toaster />
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout-success" element={<CheckOutSuccess />} />
        <Route path="*" element={<NotFound />} /></Route>
      </Routes>
    </Router>
    </CartProvider>
  );
}


export default App;
