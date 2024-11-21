import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { TbManualGearbox } from "react-icons/tb";
import { PiTargetBold } from "react-icons/pi";
import { MdOutlinePointOfSale } from "react-icons/md";

const Turnover = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const companyUSPData = [
    { label: "Primary Competitive Advantage", value: "Experienced R & D Department" },
    { label: "Quality Measures / Testing Facilities", value: "Yes" },
  ];

  return (
    <div className="relative z-10 p-6 space-y-12 bg-gradient-to-br from-blue-800 to-blue-800 shadow-lg rounded-xl h-full">
      {/* Title */}
      <h2
        className="text-4xl font-extrabold text-center text-white"
       
      >
        Who We Are
      </h2>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
        {/* Manufacturing Card */}
        <div
          className="group shadow-md bg-white border border-gray-200 p-6 rounded-lg text-center hover:bg-blue-50 hover:scale-105  transition-all duration-700"
          data-aos="fade-left">
          <div className="flex justify-center items-center mb-3 text-5xl text-blue-600 group-hover:text-blue-800">
            <MdOutlinePrecisionManufacturing />
          </div>
          <h3 className="text-lg font-bold text-blue-700 mb-2 group-hover:text-blue-900">
            Manufacturing
          </h3>
          <p className="text-gray-600 group-hover:text-gray-800">
            Our manufacturing process combines modern facilities and technology, ensuring client-specific solutions.
          </p>
        </div>

        {/* Quality Card */}
        <div
          className="group shadow-md bg-white border border-gray-200 p-6 rounded-lg text-center hover:bg-blue-50 hover:scale-105 transition-all duration-300"
          data-aos="fade-up">
          <div className="flex justify-center items-center mb-3 text-5xl text-blue-600 group-hover:text-blue-800">
            <TbManualGearbox />
          </div>
          <h3 className="text-lg font-bold text-blue-700 mb-2 group-hover:text-blue-900">
            Quality
          </h3>
          <p className="text-gray-600 group-hover:text-gray-800">
            We focus on top-quality materials and craftsmanship, ensuring our products exceed client expectations.
          </p>
        </div>

        {/* Target Market Card */}
        <div
          className="group shadow-md bg-white border border-gray-200 p-6 rounded-lg text-center hover:bg-blue-50 hover:scale-105 transition-all duration-300"
          data-aos="fade-down">
          <div className="flex justify-center items-center mb-3 text-5xl text-blue-600 group-hover:text-blue-800">
            <PiTargetBold />
          </div>
          <h3 className="text-lg font-bold text-blue-700 mb-2 group-hover:text-blue-900">
            Target Market
          </h3>
          <p className="text-gray-600 group-hover:text-gray-800">
            We are currently seeking inquiries from the Tamil Nadu and Kerala regions.
          </p>
        </div>

        {/* Unique Selling Proposition Card */}
        <div
          className="group shadow-md bg-white border border-gray-200 p-6 rounded-lg text-center hover:bg-blue-50 hover:scale-105 transition-all duration-300"
          data-aos="fade-right">
          <div className="flex justify-center items-center mb-3 text-5xl text-blue-600 group-hover:text-blue-800">
            <MdOutlinePointOfSale />
          </div>
          <h3 className="text-lg font-bold text-blue-700 mb-2 group-hover:text-blue-900">
            Unique Selling Proposition
          </h3>
          {companyUSPData.map((item, index) => (
            <p key={index} className="text-gray-600 group-hover:text-gray-800">
              <strong>{item.label}:</strong> {item.value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Turnover;
