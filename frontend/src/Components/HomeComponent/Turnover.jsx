import React from 'react';
import worldmap from '../../assets/worldmap.png';

const Turnover = () => {
  // Company profile data
  const companyProfileData = [
    { label: 'Nature of Business', value: 'Manufacturer' },
    { label: 'Additional Business', value: 'Factory / Manufacturing' },
    { label: 'Company CEO', value: 'Hari Krishnan' },
    { label: 'Registered Address', value: 'No. 19 - C, Kuttakarai Street Thuraiyur, Turaiyur- 621 010, Tamil Nadu, India' },
    { label: 'Total Number of Employees', value: 'Upto 10 People' },
    { label: 'GST Registration Date', value: '01-07-2017' },
    { label: 'Legal Status of Firm', value: 'Proprietorship' },
    { label: 'Annual Turnover', value: '40 L - 1.5 Cr' },
  ];

  // Team and staff data
  const teamAndStaffData = [
    { label: 'No. of Research / QC Staff', value: '1 - 5 People' },
    { label: 'No. of Skilled Staff', value: '1 - 5 People' },
  ];

  // Company Unique Selling Proposition (USP) data
  const companyUSPData = [
    { label: 'Primary Competitive Advantage', value: 'Experienced R & D Department' },
    { label: 'Quality Measures / Testing Facilities', value: 'Yes' },
  ];

  // Statutory profile data
  const statutoryProfileData = [
    { label: 'Banker', value: 'Canara Bank' },
    { label: 'GST No.', value: '33AFGPH9414L1ZC' },
    { label: 'Customized Packaging', value: 'Yes' },
    { label: 'Payment Terms', value: 'D/A' },
    { label: 'Payment Mode', value: 'Cash' },
    { label: 'Shipment Mode', value: 'By Air, By Road' },
  ];

  return (
    <div 
      className="relative flex min-h-screen bg-cover bg-center items-center p-8" 
      style={{ backgroundImage: `url(${worldmap})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Company Details on Left */}
      <div className="relative z-10 grid grid-cols-2 gap-4 text-gray-900 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg w-1/4">
        {companyProfileData.map((item, index) => (
          <div key={index} className="p-3 bg-white rounded shadow-md">
            <p className="font-bold text-sm">{item.label}:</p>
            <p>{item.value}</p>
          </div>
        ))}
      </div>

      {/* Team and Staff Data on Left */}
      <div className="relative z-10 grid grid-cols-2 gap-4 text-gray-900 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg w-1/4 ml-4">
        {teamAndStaffData.map((item, index) => (
          <div key={index} className="p-3 bg-white rounded shadow-md">
            <p className="font-bold text-sm">{item.label}:</p>
            <p>{item.value}</p>
          </div>
        ))}
      </div>

      {/* Statutory Profile Data on Left */}
      <div className="relative z-10 grid grid-cols-2 gap-4 text-gray-900 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg w-1/4 ml-4">
        {statutoryProfileData.map((item, index) => (
          <div key={index} className="p-3 bg-white rounded shadow-md">
            <p className="font-bold text-sm">{item.label}:</p>
            <p>{item.value}</p>
          </div>
        ))}
      </div>

      {/* Cards on Right */}
      <div className="relative z-10 flex flex-col space-y-6 ml-auto w-1/3 text-white">
        {/* Manufacturing Card */}
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Manufacturing</h3>
          <p className="text-gray-900">
            Our manufacturing process combines modern facilities and technology, ensuring client-specific solutions.
          </p>
        </div>

        {/* Quality Card */}
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Quality</h3>
          <p className="text-gray-900">
            We focus on top-quality materials and craftsmanship, ensuring our products exceed client expectations.
          </p>
        </div>

        {/* Target Market Card */}
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Target Market</h3>
          <p className="text-gray-900">
            We are currently seeking inquiries from the Tamil Nadu and Kerala regions.
          </p>
        </div>

        {/* Unique Selling Proposition Cards */}
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Unique Selling Proposition</h3>
          {companyUSPData.map((item, index) => (
            <p key={index} className="text-gray-900">
              <strong>{item.label}:</strong> {item.value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Turnover;
