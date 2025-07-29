import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const CheckOutSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 dark:bg-gray-900 text-center">
      <FaCheckCircle className="w-20 h-20 text-green-500 mb-4" />
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Payment Successful 🎉</h1>
      <p className="text-gray-600 dark:text-gray-300 mt-2">
        Thank you for your purchase. Redirecting you to the home page...
      </p>
      <div className="w-40 mt-6 h-1 bg-gray-300 rounded-full overflow-hidden">
        <div className="w-full h-full bg-green-500 animate-[progress_3s_linear]"></div>
      </div>
      <style>{`
        @keyframes progress {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default CheckOutSuccess;
