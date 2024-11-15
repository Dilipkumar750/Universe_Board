import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import logo from '../../assets/logo.png';

function TopHeader() {
  return (
    <section className="d-flex flex-column flex-md-row align-items-center justify-content-between bg-black text-blue-400 py-2 px-3 sticky-top z-50">
      {/* Left section with the company name */}
      <div className="d-flex align-items-center mb-2 mb-md-0 ms-md-3 center">
        <img src={logo} alt="Company Logo" className="h-20 w-20 ml-20" />
        <span className="fs-2 ms-2">Universe Visuals</span>
      </div>

      {/* Right section with contact button and details */}
      <div className="d-flex align-items-center mb-2 mb-md-0 ms-md-3 gap-3">
        {/* Contact button */}
        <Link to="/Contact">
          <button
            className="btn text-black d-flex align-items-center justify-content-center shadow-lg"
            style={{ backgroundColor: '#ffffff' }}
            type="button"
          >
            Contact Us
            <IoArrowForward className="ms-2" />
          </button>
        </Link>

        {/* Contact details */}
        <div className="align-items-center gap-3">
          <a href="mailto:info@universevisuals.com" className="text-white d-flex align-items-center gap-2">
            <IoIosMail /> info@universevisuals.com
          </a>
          <a href="tel:9965085475" className="text-white d-flex align-items-center gap-2">
            <FaPhoneAlt /> 9965085475
          </a>
        </div>
      </div>
    </section>
  );
}

export default TopHeader;
