import { SiFacebook } from "react-icons/si";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { 
  FaBoxOpen, FaInfoCircle, FaPhoneAlt, 
  FaClipboardList, FaHome, FaList, FaUser, 
  FaFileContract, FaShieldAlt, FaEnvelope, FaMobileAlt 
} from "react-icons/fa";
import logo from "../../assets/UniverseVisuals.png";
import { Link } from "react-router-dom";

const ColorFoot = () => (
  <footer className="p-4 md:p-10 font-[sans-serif] tracking-wide bg-black">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-4">
      
      {/* Logo and Social Links */}
      <div className="lg:col-span-2 flex flex-col items-start md:pl-10 md:-mt-10" >
        <img
          src={logo}
          alt="Gravity Global Exports Logo"
          className="w-60 md:w-48 scale-150 p-3"
        />
        <ul className="flex space-x-6 my-2">
          <li>
            <a href="#" aria-label="Facebook" className="text-white text-3xl hover:text-gray-400">
              <SiFacebook />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Instagram" className="text-white text-3xl hover:text-gray-400">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#" aria-label="YouTube" className="text-white text-3xl hover:text-gray-400">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="https://wa.me/9965085475" aria-label="WhatsApp" className="text-white text-3xl hover:text-gray-400">
              <FaWhatsapp />
            </a>
          </li>
        </ul>
        <address className="font-bold text-white text-sm space-y-1 mt-4">
          <span className="text-[#98CE16] font-bold text-2xl">Universe Visuals</span>
          <br />
          9/W 2A, 1st Floor Akilandeswari Nagar,
          <br />
          Canara Bank Colony, Ammapatti Salai,
          <br />
          Thuraiyur, Trichy Dt, Tamilnadu, Code: 33
          <br />
          GSTIN/UIN: 33BFVPM5221C1ZL
        </address>
      </div>

      {/* Product List 1 */}
      <div>
        <h4 className="text-lg font-semibold mb-6 text-[#98CE16] flex items-center">
          <FaBoxOpen className="mr-2" /> Products List
        </h4>
        <ul className="space-y-2">
          {[
            "Interactive Panel",
            "Smart Class Setups",
            "Writing Boards",
            "Display Boards",
            "Classroom Furniture",
          ].map((item) => (
            <li key={item}>
              <Link to="/OurProducts" className="text-white hover:text-gray-400 text-sm">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Product List 2 */}
      <div>
        <h4 className="text-lg font-semibold mb-6 text-[#98CE16] flex items-center">
          <FaClipboardList className="mr-2" /> Products List
        </h4>
        <ul className="space-y-2">
          {[
            "Kindergarten Items",
            "Playground Items",
            "Laboratory Furniture",
            "Podium",
            "Other Items",
          ].map((item) => (
            <li key={item}>
              <Link to="/OurProducts" className="text-white hover:text-gray-400 text-sm">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Information */}
      <div>
        <h4 className="text-lg font-semibold mb-6 text-[#98CE16] flex items-center">
          <FaInfoCircle className="mr-2" /> Information
        </h4>
        <ul className="space-y-3">
          {[
            { label: "Home", path: "/", icon: <FaHome /> },
            { label: "Product List", path: "/OurProducts", icon: <FaList /> },
            { label: "About Us", path: "/About", icon: <FaUser /> },
            { label: "Terms & Conditions", path: "/TermsAndConditions", icon: <FaFileContract /> },
            { label: "Privacy Policy", path: "/PrivacyPolicy", icon: <FaShieldAlt /> },
          ].map((item) => (
            <li key={item.label} className="flex items-center">
              <span className="text-[#98CE16] mr-2">{item.icon}</span>
              <Link to={item.path} className="text-white hover:text-gray-400 text-sm">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Us */}
      <div>
        <h4 className="text-lg font-semibold mb-6 text-[#98CE16] flex items-center">
          <FaPhoneAlt className="mr-2" /> Contact Us
        </h4>
        <ul className="space-y-3">
          {[
            { text: "info@universevisuals.com", href: "mailto:info@universevisuals.com", icon: <FaEnvelope /> },
            { text: "+91 99650 85475", href: "tel:9965085475", icon: <FaMobileAlt /> },
            { text: "+91 90421 22076", href: "tel:9042122076", icon: <FaMobileAlt /> },
          ].map((item) => (
            <li key={item.text} className="flex items-center">
              <span className="text-[#98CE16] mr-2">{item.icon}</span>
              <a href={item.href} className="text-white hover:text-gray-400 text-sm">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <p className="text-white text-sm mt-10 text-center">
      © Universe Visuals All rights reserved <span className="text-[#98CE16]">♥</span> Prepared by Ultrafly Solutions Private Limited
    </p>
  </footer>
);

export default ColorFoot;
