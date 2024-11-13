import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function TopHeader() {
  return (
    <section className="d-flex flex-column flex-md-row align-items-center justify-content-between bg-black text-white py-2 px-3 sticky-top z-50">
      {/* Left section with the company name */}
      <div className="d-flex align-items-center mb-2 mb-md-0 ms-md-3">
        <span className="fs-2">Universe Visuals</span>
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
          <a href="mailto:info@universeeducationalvisuals.com" className="text-white d-flex align-items-center gap-2">
            <IoIosMail /> info@universeeducationalvisuals.com
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
