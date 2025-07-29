import { Link } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <MdErrorOutline className="text-red-500 w-20 h-20 mb-4 animate-bounce" />
      <h1 className="text-6xl font-bold text-gray-800 dark:text-white">404</h1>
      <h2 className="mt-2 text-2xl font-semibold text-gray-700 dark:text-gray-300">Oops! Page not found</h2>
      <p className="mt-2 text-gray-500 text-center max-w-md dark:text-gray-400">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg shadow-md transition">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
