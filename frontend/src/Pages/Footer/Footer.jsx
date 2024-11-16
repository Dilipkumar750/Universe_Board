import { SiFacebook } from "react-icons/si";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const ColorFoot = () => (
  <footer className="bg-black ps-20 md:p-10 font-[sans-serif] tracking-wide">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-1 ">
      <div className="lg:col-span-2">
        <img
          src={logo}
          alt="Gravity Global Exports Logo"
          className="w-28 scale-150 p-3"
        />
        <ul className="flex space-x-6 my-2">
          <li>
            <a
              href="#"
              aria-label="Facebook"
              className="text-white text-2xl hover:bg-gray-300">
              <SiFacebook />
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white text-2xl hover:bg-gray-300">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="YouTube"
              className="text-white text-2xl hover:bg-gray-300">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/9965085475"
              aria-label="WhatsApp"
              className="text-white text-2xl hover:bg-gray-300">
              <FaWhatsapp />
            </a>
          </li>
        </ul>
        <address className="font-bold text-white text-sm space-y-1">
          <span className="text-red-600 font-bold text-2xl">Universe Visuals</span>
          <br />
          9/W, 1A, Akilandeswari Nagar,
          <br />
          Canara Bank Colony, Ammapatti Salai,
          <br />
          Thuraiyur, Trichy Dt,<br/> Tamilnadu, Code: 33
          <br />
          GSTIN/ UIN: 33BFVPM5221C1ZL
        </address>

      </div>

      <div>
        <h4 className="text-lg font-semibold mb-6 text-red-500">
          Product List
        </h4>
        <ul className="space-y-4">
          <li>
            <Link
              to="/OurProducts"
              className="text-white hover:text-green-300 text-sm">
              Digital Podium
            </Link>
          </li>
          <li>
            <Link
              to="/OurProducts"
              className="text-white hover:text-green-300 text-sm">
              Projector
            </Link>
          </li>
          <li>
            <Link
              to="/OurProducts"
              className="text-white hover:text-green-300 text-sm">
              Sign Board
            </Link>
          </li>
          <li>
            <Link
              to="/OurProducts"
              className="text-white hover:text-green-300 text-sm">
              Writing Boards
            </Link>
          </li>
          <li>
            <Link
              to="/OurProducts"
              className="text-white hover:text-green-300 text-sm">
              Digital Projector
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-6 text-red-500">
          Information
        </h4>
        <ul className="space-y-4">
          <li>
            <Link to="/" className="text-white hover:text-green-300 text-sm">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/OurProducts"
              className="text-white hover:text-green-300 text-sm">
              Product List
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="text-white hover:text-green-300 text-sm">
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/TermsAndConditions"
              className="text-white hover:text-green-300 text-sm">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link
              to="/PrivacyPolicy"
              className="text-white hover:text-green-300 text-sm">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-6 text-red-500">
          Contact Us
        </h4>
        <ul className="space-y-4">
          <li>
            <a
              href="mailto:info@universevisuals.com"
              className="text-white hover:text-green-300 text-sm">
              info@universevisuals.com
            </a>
          </li>
          <li>
            <a
              href="tel:9965085475"
              className="text-white hover:text-green-300 text-sm">
              99650 85475
            </a>
          </li>
        </ul>
      </div>
    </div>

    <p className="text-white text-sm mt-10 text-center">
      © Universe Visuals All rights reserved ♥ UltraFly Solutions Pvt Limited
    </p>
  </footer>
);

export default ColorFoot;
