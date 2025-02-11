import { IoArrowForward } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useState } from "react";
import logo from "../../assets/UniverseVisuals.png";
import v from "../../assets/v1.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className="bg-[#191a1f] sticky top-0 z-50 px-6 bg-cover bg-center shadow-slate-800"

    >
      <div className="max-w-full flex items-center justify-between mx-auto h-20">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img src={logo} alt="Company Logo" className="h-36 w-48" />
          </Link>

        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          {["/", "/About", "/OurProducts", "/Contact"].map((path) => (
            <Link
              key={path}
              to={path}
              className={`text-lg font-medium transition-all duration-200 ease-in-out 
        ${isActive(path) ? "border-b-1 transition-all duration-100 border-[#fdfdfd] text-[#98CE16]" : "text-[#98CE16] hover:text-white-200 hover:border-b-2 hover:border-[#fdfdfd]"}`}
            >
              {path === "/" ? "Home" : path === "/OurProducts" ? "Our Products" : path.replace("/", "")}
            </Link>
          ))}
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 right-4 bg-white shadow-lg rounded-lg py-2">
            <ul className="space-y-2">
              {["/", "/About", "/OurProducts", "/Contact"].map((path) => (
                <li key={path}>
                  <Link
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-black hover:bg-gray-100 px-4 py-2 rounded
              ${isActive(path) ? "border-b-4 border-[#98CE16]" : ""}`}
                  >
                    {path === "/" ? "Home" : path === "/OurProducts" ? "Our Products" : path.replace("/", "").toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}


        {/* Contact Information */}
        <div className="hidden md:flex flex-col text-md items-start gap-1">
          <a
            href="mailto:info@universevisuals.com"
            className="flex items-center gap-2 text-white hover:text-gray-300"
          >
            <IoIosMail className="text-[#98CE16]" /> info@universevisuals.com
          </a>
          <a
            href="tel:9965085475"
            className="flex items-center gap-2 text-white hover:text-gray-300"
          >
            <FaPhoneAlt className="text-[#98CE16]" />+91 99650 85475
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="inline-flex items-center w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden"
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

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 right-4 bg-white shadow-lg rounded-lg py-2">
            <ul className="space-y-2">
              {["/", "/About", "/OurProducts", "/Contact"].map((path) => (
                <li key={path}>
                  <Link
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-black hover:bg-gray-100 px-4 py-2 rounded
                      ${isActive(path) ? "border-b-4 border-[#98CE16]" : ""}`}
                  >
                    {path === "/" ? "Home" : path.replace("/", "").toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
