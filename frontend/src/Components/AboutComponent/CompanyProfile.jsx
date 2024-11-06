// import React from "react";
// import wareHouse from '../../assets/wareHouse.png'

// // Reusable InfoCard Component
// const InfoCard = ({ title, data }) => (
//   <div style={styles.card}>
//     <h3 style={styles.cardTitle}>{title}</h3>
//     <div style={styles.table}>
//       {data.map((item, index) => (
//         <div key={index} style={styles.row}>
//           <div style={styles.label}>{item.label}</div>
//           <div style={styles.value}>{item.value}</div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// const CompanyProfile = () => {
//   // Data for each section
//   const companyProfileData = [
//     { label: "Nature of Business", value: "Manufacturer" },
//     { label: "Additional Business", value: "Factory / Manufacturing" },
//     { label: "Company CEO", value: "Hari Krishnan" },
//     {
//       label: "Registered Address",
//       value:
//         "No. 19 - C, Kuttakarai Street Thuraiyur, Turaiyur- 621 010, Tamil Nadu, India",
//     },
//     { label: "Total Number of Employees", value: "Upto 10 People" },
//     { label: "GST Registration Date", value: "01-07-2017" },
//     { label: "Legal Status of Firm", value: "Proprietorship" },
//     { label: "Annual Turnover", value: "40 L - 1.5 Cr" },
//   ];

//   const teamAndStaffData = [
//     { label: "No. of Research / QC Staff", value: "1 - 5 People" },
//     { label: "No. of Skilled Staff", value: "1 - 5 People" },
//   ];

//   const companyUSPData = [
//     {
//       label: "Primary Competitive Advantage",
//       value: "Experienced R & D Department",
//     },
//     { label: "Quality Measures / Testing Facilities", value: "Yes" },
//   ];

//   const statutoryProfileData = [
//     { label: "Banker", value: "Canara Bank" },
//     { label: "GST No.", value: "33AFGPH9414L1ZC" },
//     { label: "Customized Packaging", value: "Yes" },
//     { label: "Payment Terms", value: "D/A" },
//     { label: "Payment Mode", value: "Cash" },
//     { label: "Shipment Mode", value: "By Air, By Road" },
//   ];

//   return (
//     <>
//       <div style={styles.container}>
//         <InfoCard title="Company Profile" data={companyProfileData} />
//         <InfoCard title="Team and Staff" data={teamAndStaffData} />
//         <InfoCard title="Company USP" data={companyUSPData} />
//         <InfoCard title="Statutory Profile" data={statutoryProfileData} />
//       </div>

//       <div className="container mx-auto my-10 px-4">
//         <div className="flex flex-col md:flex-row items-center">
//           {/* Text Section - Left Side */}
//           <div className="md:w-1/2 mb-6 md:mb-0">
//             <h3 className="text-2xl font-bold text-red-600 mb-4">
//               Warehousing & Packaging
//             </h3>
//             <p className="text-gray-700 mb-4">
//               We own a well-facilitated and fully-equipped warehouse to store
//               the display and communication aids. In addition to that, the
//               warehouse is kept well ventilated and moisture proof to protect
//               all our products against any damage. There are well-labeled
//               separate chambers to keep products like chalks, display boards,
//               stands, and other accessories individually to avoid any breakage
//               or damage.
//             </p>
//             <p className="text-gray-700">
//               For packaging, we have special units where the packaging is done
//               with utmost care and with high quality, soft, waterproof, and
//               tamper-proof packaging materials to avoid breakage or accidental
//               damages that generally happen during transportation.
//             </p>
//           </div>

//           {/* Image Section - Right Side */}
//           <div className="md:w-1/2 flex justify-center">
//             {/* Replace src with the actual image path or URL */}
//             <img
//               src={wareHouse}
//               alt="Product Quality"
//               className="w-full h-96 max-w-md rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     textSize: "larger",
//     gap: "20px",
//     alignItems: "center",
//     backgroundColor: "#f4f4f4",
//     padding: "20px",
//   },
//   card: {
//     backgroundColor: "green",
//     padding: "20px",
//     borderRadius: "8px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     maxWidth: "600px",
//     width: "100%",
//   },
//   cardTitle: {
//     color: "black", // Blue color
//     textAlign: "center",
//     marginBottom: "15px",
//   },
//   table: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   row: {
//     display: "flex",
//     justifyContent: "space-between",
//     padding: "8px 0",
//     borderBottom: "1px solid #e0e0e0",
//   },
//   label: {
//     fontWeight: "large",
//     color: "white",
//   },
//   value: {
//     color: "white",
//     justifyContent: "space-center",
//   },
// };

// export default CompanyProfile;
