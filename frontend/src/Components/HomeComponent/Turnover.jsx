import React from 'react';

const Turnover = () => {
  // Company Unique Selling Proposition (USP) data
  const companyUSPData = [
    { label: "Primary Competitive Advantage", value: "Experienced R & D Department" },
    { label: "Quality Measures / Testing Facilities", value: "Yes" },
  ];

  const statutoryProfileData = [
    { label: "Banker", value: "Canara Bank" },
    { label: "GST No.", value: "33AFGPH9414 L1ZC" },
    { label: "Customized Packaging", value: "Yes" },
    { label: "Payment Terms", value: "D/A" },
    { label: "Payment Mode", value: "Cash" },
    { label: "Shipment Mode", value: "By Air, By Road" },
    { label: "No. of Research / QC Staff", value: "1 - 5 People" },
    { label: "No. of Skilled Staff", value: "1 - 5 People" },
  ];

  const companyProfileData = [
    { label: "Nature of Business", value: "Manufacturer" },
    { label: "Additional Business", value: "Factory / Manufacturing" },
    { label: "Total Number of Employees", value: "Upto 10 People" },
    { label: "GST Registration Date", value: "01-07-2017" },
    { label: "Legal Status of Firm", value: "Proprietorship" },
    { label: "Annual Turnover", value: "40 L - 1.5 Cr" },
  ];

  return (
    <div className="relative z-10 p-6 space-y-6 bg-white shadow-lg rounded-lg bg-opacity-80">
      {/* Manufacturing, Quality, and Target Market Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="shadow-md bg-white border border-gray-300 p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-red-500 mb-2">Manufacturing</h3>
          <p>Our manufacturing process combines modern facilities and technology, ensuring client-specific solutions.</p>
        </div>

        <div className="shadow-md bg-white border border-gray-300 p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-red-500 mb-2">Quality</h3>
          <p>We focus on top-quality materials and craftsmanship, ensuring our products exceed client expectations.</p>
        </div>

        <div className="shadow-md bg-white border border-gray-300 p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-red-500 mb-2">Target Market</h3>
          <p>We are currently seeking inquiries from the Tamil Nadu and Kerala regions.</p>
        </div>
      {/* Unique Selling Proposition Card */}
      <div className="shadow-md bg-white border border-gray-300 p-6 rounded-lg text-center">
        <h3 className="text-lg font-semibold text-red-500 mb-2">Unique Selling Proposition</h3>
        {companyUSPData.map((item, index) => (
          <p key={index}>
            <strong>{item.label}:</strong> {item.value}
          </p>
        ))}
      </div>
      </div>


      {/* Statutory Profile */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {statutoryProfileData.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow-lg border border-gray-300 bg-gray-100 hover:bg-blue-100 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <p className="font-semibold text-blue-900 text-left">{item.label}:</p>
            <p className="text-gray-800">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Company Profile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {companyProfileData.map((item, index) => (
          <div
            key={index}
            className={`p-3 rounded shadow-md border text-black`}
          >
            <p className="font-bold text-sm">{item.label}:</p>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Turnover;
