import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";
import paypal from "../assets/images/paypal.png";
import mastercard from "../assets/images/mastercard.png";
import visa from "../assets/images/visa.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 mt-10">
      <div className="w-[95%] mx-auto py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h1 className="text-2xl font-bold dark:text-white">
            P<span className="text-teal-500">Gallery</span>.
          </h1>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-teal-500">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-teal-500">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-teal-500">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-teal-500">
              <FaPinterestP size={20} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b-2 border-teal-500 inline-block dark:text-white">
            Let's Talk
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">(+123) 456 789</p>
          <p className="text-gray-600 dark:text-gray-300 mt-1">contact@pgallery.com</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 border-b-2 border-teal-500 inline-block dark:text-white">
            Find Us
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            33 Grand Central <br />
            New York, NY 8877 United States
          </p>
        </div>
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-2 border-b-2 border-teal-500 inline-block dark:text-white">
            We Accept
          </h3>
          <div className="flex justify-center md:justify-start gap-3 mt-3 flex-wrap">
            <img src={paypal} alt="PayPal" className="h-14" />
            <img src={mastercard} alt="MasterCard" className="h-14" />
            <img src={visa} alt="Visa" className="h-14" />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 py-3 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} PGallery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
