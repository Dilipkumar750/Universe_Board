import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { TbManualGearbox } from "react-icons/tb";
import { PiTargetBold } from "react-icons/pi";
import { MdOutlinePointOfSale } from "react-icons/md";
import { FaIndustry, FaUserFriends, FaMoneyBillWave, FaShippingFast } from "react-icons/fa";
import { MdBusiness, MdDateRange, MdOutlinePeople, MdOutlineAccountBalance } from "react-icons/md";
import { AiOutlineAudit, AiOutlineBarcode, AiOutlineDollarCircle } from "react-icons/ai";
import { BsGear, BsBoxSeam } from "react-icons/bs";
import { RiGovernmentLine } from "react-icons/ri";

const Turnover = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const companyUSPData = [
    { label: "Primary Competitive Advantage", value: "Experienced R & D Department" },
    { label: "Quality Measures / Testing Facilities", value: "Yes" },
  ];

  // const companyProfileData = [
  //   { label: "Nature of Business", value: "Manufacturer", icon: <FaIndustry /> },
  //   { label: "Additional Business", value: "Factory / Manufacturing", icon: <MdBusiness /> },
  //   { label: "Total Number of Employees", value: "Upto 10 People", icon: <FaUserFriends /> },
  //   { label: "GST Registration Date", value: "01-07-2017", icon: <MdDateRange /> },
  //   { label: "Legal Status of Firm", value: "Proprietorship", icon: <RiGovernmentLine /> },
  //   { label: "Annual Turnover", value: "40 L - 1.5 Cr", icon: <FaMoneyBillWave /> },
  //   { label: "Banker", value: "Canara Bank", icon: <MdOutlineAccountBalance /> },
  //   { label: "GST No.", value: "33AFGPH9414 L1ZC", icon: <AiOutlineBarcode /> },
  //   { label: "Customized Packaging", value: "Yes", icon: <BsBoxSeam /> },
  //   { label: "Payment Terms", value: "D/A", icon: <AiOutlineDollarCircle /> },
  //   { label: "Payment Mode", value: "Cash", icon: <AiOutlineAudit /> },
  //   { label: "Shipment Mode", value: "By Air, By Road", icon: <FaShippingFast /> },
  //   { label: "No. of Research / QC Staff", value: "1 - 5 People", icon: <MdOutlinePeople /> },
  //   { label: "No. of Skilled Staff", value: "1 - 5 People", icon: <BsGear /> },
  // ];

  return (

    
    <div className="relative z-10 p-6 space-y-6 bg-white shadow-lg rounded-lg bg-opacity-80">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-800" data-aos="fade-up">Who We Are</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div
          className="shadow-md bg-white border border-gray-300 p-6 rounded-lg text-center"
          data-aos="fade-right"
        >
          <div className="flex justify-center items-center mb-2 text-5xl text-black-500">
            <MdOutlinePrecisionManufacturing />
          </div>
          <h3 className="text-lg font-semibold text-red-500 mb-2">Manufacturing</h3>
          <p>Our manufacturing process combines modern facilities and technology, ensuring client-specific solutions.</p>
        </div>

        <div
          className="shadow-md bg-white border border-gray-300 p-6 rounded-lg text-center"
          data-aos="fade-up"
        >
          <div className="flex justify-center items-center mb-2 text-5xl text-black-500">
            <TbManualGearbox />
          </div>
          <h3 className="text-lg font-semibold text-red-500 mb-2">Quality</h3>
          <p>We focus on top-quality materials and craftsmanship, ensuring our products exceed client expectations.</p>
        </div>

        <div
          className="shadow-md bg-white border border-gray-300 p-6 rounded-lg text-center"
          data-aos="fade-down"
        >
          <div className="flex justify-center items-center mb-2 text-5xl text-black-500">
            <PiTargetBold />
          </div>
          <h3 className="text-lg font-semibold text-red-500 mb-2">Target Market</h3>
          <p>We are currently seeking inquiries from the Tamil Nadu and Kerala regions.</p>
        </div>

        <div
          className="shadow-md bg-white border border-gray-300 p-6 rounded-lg text-center"
          data-aos="fade-left"
        >
          <div className="flex justify-center items-center mb-2 text-5xl text-black-500">
            <MdOutlinePointOfSale />
          </div>
          <h3 className="text-lg font-semibold text-red-500 mb-2">Unique Selling Proposition</h3>
          {companyUSPData.map((item, index) => (
            <p key={index}>
              <strong>{item.label}:</strong> {item.value}
            </p>
          ))}
        </div>
      </div>
      {/* <h2 className="text-4xl font-bold mb-8 text-center text-blue-800" data-aos="fade-up">About Our Company</h2> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {companyProfileData.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded shadow-md border text-black flex items-center"
            data-aos="zoom-in"
          >
            <div className="text-4xl text-red-500">{item.icon}</div>
            <div className="flex flex-col ml-auto text-right">
              <p className="font-bold text-sm">{item.label}:</p>
              <p>{item.value}</p>
            </div>
          </div>
        ))}
      </div> */}


    </div>

    
  );
};

export default Turnover;
