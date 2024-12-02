import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useState } from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto h-20">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Company Logo" className="h-20 w-28 ml-0" />
          <span className="text-3xl font-bold text-blue-900">
            Universe Visuals
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-lg font-medium text-black hover:text-gray-200">
            Home
          </Link>
          <Link to="/About" className="text-lg font-medium text-black hover:text-gray-200">
            About Us
          </Link>
          <Link to="/OurProducts" className="text-lg font-medium text-black hover:text-gray-200">
            Our Products
          </Link>
          <Link to="/Contact" className="text-lg font-medium text-black hover:text-gray-200">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Link to="/Contact">
            <button
              className="bg-blue-200 text-gray-800 hover:text-white md:px-4 md:py-2 rounded-lg flex items-center shadow-lg transition-all duration-300 hover:bg-blue-800"
              type="button"
            >
              Contact Us
              <IoArrowForward className="ml-2" />
            </button>
          </Link>
          <div className="hidden md:flex flex-col text-md items-end gap-1">
            <a
              href="mailto:info@universevisuals.com"
              className="flex items-center gap-2 text-black hover:text-gray-300"
            >
              <IoIosMail /> info@universevisuals.com
            </a>
            <a
              href="tel:9965085475"
              className="flex items-center gap-2 text-black hover:text-gray-300"
            >
              <FaPhoneAlt /> 99650 85475
            </a>
          </div>
        </div>

        <button
          onClick={toggleMenu}
          className="inline-flex items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transform transition-all duration-500 w-full md:hidden fixed inset-0 bg-white z-50`}
          id="navbar-default"
        >
          <ul className="flex flex-col space-y-4 bg-white">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className="block text-black hover:bg-red-100 rounded"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                onClick={toggleMenu}
                className="block text-black hover:bg-red-100 rounded"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/OurProducts"
                onClick={toggleMenu}
                className="block text-black hover:bg-red-100 rounded"
              >
                Our Products
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                onClick={toggleMenu}
                className="block text-black hover:bg-red-100 rounded"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
