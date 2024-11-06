import worldmap from "../../assets/worldmap.png";

const Turnover = () => {
  // Company profile data
  const companyProfileData = [
    { label: "Nature of Business", value: "Manufacturer" },
    { label: "Additional Business", value: "Factory / Manufacturing" },
    { label: "Total Number of Employees", value: "Upto 10 People" },
    { label: "GST Registration Date", value: "01-07-2017" },
    { label: "Legal Status of Firm", value: "Proprietorship" },
    { label: "Annual Turnover", value: "40 L - 1.5 Cr" },
  ];

  // Team and staff data
  // const teamAndStaffData = [

  // ];

  // Company Unique Selling Proposition (USP) data
  const companyUSPData = [
    {
      label: "Primary Competitive Advantage",
      value: "Experienced R & D Department",
    },
    { label: "Quality Measures / Testing Facilities", value: "Yes" },
  ];

  // Statutory profile data
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

  return (
    <div
      className="relative min-h-screen bg-cover bg-center items-center p-8 grid grid-cols-1 md:grid-cols-3 gap-5"
      style={{ backgroundImage: `url(${worldmap})` }}>
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Company Details on Left */}
      <div className="relative z-10 grid grid-cols-2 gap-4 text-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg bg-gray-400">
        {companyProfileData.map((item, index) => (
          <div key={index} className="p-3 rounded text-white shadow-md bg-gray-900 border border-white">
            <p className="font-bold text-sm">{item.label}:</p>
            <p>{item.value}</p>
          </div>
        ))}
      </div>

      {/* Statutory Profile Data on Left */}
      <div className="relative z-10 grid grid-cols-2 gap-4 text-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg bg-gray-400">
        {statutoryProfileData.map((item, index) => (
          <div key={index} className="p-3 rounded text-white shadow-md bg-gray-900 border border-white">
            <p className="font-bold text-sm">{item.label}:</p>
            <p className="">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Cards on Right */}
      <div className="relative z-10 flex flex-col space-y-6 ml-auto text-white bg-opacity-80 p-6 rounded-lg shadow-lg bg-gray-400">
        {/* Manufacturing Card */}
        <div className="shadow-md bg-gray-900 border border-white p-6 rounded-lg text-center text-white">
          <h3 className="text-lg font-semibold text-red-500 mb-2">
            Manufacturing
          </h3>
          <p className="text-white">
            Our manufacturing process combines modern facilities and technology,
            ensuring client-specific solutions.
          </p>
        </div>

        {/* Quality Card */}
        <div className="shadow-md bg-gray-900 border border-white p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-red-500 mb-2">Quality</h3>
          <p className="text-white">
            We focus on top-quality materials and craftsmanship, ensuring our
            products exceed client expectations.
          </p>
        </div>

        {/* Target Market Card */}
        <div className="shadow-md bg-gray-900 border border-white p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-red-500 mb-2">
            Target Market
          </h3>
          <p className="text-white">
            We are currently seeking inquiries from the Tamil Nadu and Kerala
            regions.
          </p>
        </div>

        {/* Unique Selling Proposition Cards */}
        <div className="shadow-md bg-gray-900 border border-white p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-red-500 mb-2">
            Unique Selling Proposition
          </h3>
          {companyUSPData.map((item, index) => (
            <p key={index} className="text-white">
              <strong>{item.label}:</strong> {item.value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Turnover;
