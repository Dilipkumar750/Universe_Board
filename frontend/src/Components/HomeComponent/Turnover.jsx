import React, { useEffect } from 'react';
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { TbManualGearbox } from "react-icons/tb";
import { PiTargetBold } from "react-icons/pi";
import { MdOutlinePointOfSale } from "react-icons/md";
import bg from "../../assets/bginnovation.jpg"

const Turnover = () => {
  const turnoverData = [
    {
      icon: <MdOutlinePrecisionManufacturing />,
      title: "Manufacturing",
      description: "Our manufacturing process combines modern facilities and technology, ensuring client-specific solutions."
    },
    {
      icon: <TbManualGearbox />,
      title: "Quality",
      description: "We focus on top-quality materials and craftsmanship, ensuring our products exceed client expectations."
    },
    {
      icon: <PiTargetBold />,
      title: "Target Market",
      description: "We are currently seeking inquiries from the Tamil Nadu and Kerala regions."
    },
    {
      icon: <MdOutlinePointOfSale />,
      title: "Unique Selling Proposition",
      description: "Experienced R & D Department, Quality Testing Facilities."
    }
  ];

  return (
    <div className="relative p-12 rounded-xl shadow-xl" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}>
      <h2 className="text-4xl font-bold text-center text-[#98CE16]">
        Turnover Highlights
      </h2>

      {/* Background Shapes for Animation */}
      {/* <div
        className="absolute w-40 h-40 bg-blue-400 rounded-full opacity-50 -top-20 left-72 md:-top-10 items-center"
        style={{ animation: "floating 4s ease-in-out infinite" }}
      ></div> */}
      <div
        className="absolute w-24 h-24 bg-orange-300 opacity-70 rounded-md top-24 right-16"
        style={{ animation: "rotate 6s linear infinite" }}
      ></div>

      {/* All Details Displayed in Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 items-center mt-8">
        {turnoverData.map((item, index) => (
          <div
            key={index}
            className="group shadow-md bg-white border border-gray-200 p-6 rounded-lg text-center hover:bg-blue-50 hover:scale-105 transition-all duration-300"
          >
            <div className="flex justify-center items-center mb-3 text-5xl text-blue-600 group-hover:text-blue-800">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold text-blue-700 mb-2 group-hover:text-blue-900">
              {item.title}
            </h3>
            <p className="text-gray-600 group-hover:text-gray-800">
              {item.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Turnover;
