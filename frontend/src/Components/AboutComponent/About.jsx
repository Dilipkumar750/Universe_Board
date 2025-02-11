import React, { useState } from "react";
import { Link } from "react-router-dom";
import about from "../../assets/bgabout.jpg";
import imageOne from "../../assets/classchair.jpg";
import imageTwo from "../../assets/kinds- school-desk.png";
import imageThree from "../../assets/projector1.jpg";
import imageFour from "../../assets/projector screen.jpg";
import vision from "../../assets/vision.jpg";
import mission from "../../assets/mission.jpg";
import product from "../../assets/low-price.jpg";
import ourTeam from "../../assets/ourTeam.jpg";
import whyUs from "../../assets/whyUs.jpg";
import ProjectManagement from "../../assets/project.jpg";

const products = [
  {
    title: "Single Desk",
    image: imageOne,
    quote: "Upgrade Your Classroom – Premium Class Chairs and Single Desks Available Now!",
  },
  {
    title: "Play Desk",
    image: imageTwo,
    quote: "Unbeatable Price, Unmatched Quality – Get Your Green School Board Today!",
  },
  {
    title: "Projector",
    image: imageThree,
    quote: "Learning and Fun Meet Here – Kindergarten Tables on Sale!",
  },
  {
    title: "Projector Screen",
    image: imageFour,
    quote: "Encourage Learning and Creativity with a Kid-Friendly Table!",
  },
];

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("vision");

  const renderTabContent = () => {
    switch (activeTab) {
      case "vision":
        return (
          <div>
            <h2 className="text-3xl font-bold text-center mb-4 text-lime-600">Our Vision</h2>
            <div className="flex flex-wrap items-center justify-center">
              <img src={vision} alt="Vision" className="w-full md:w-1/4 h-auto mb-4 rounded-md" data-aos="fade-right" />
              <p className="w-full md:w-1/2 text-lg text-justify text-gray-700 px-4">
                Universe Visuals aims to be a global leader in premium, innovative, and reliable educational and display products. We empower institutions, corporate entities, and homes worldwide with solutions that enhance visual communication and learning experiences.
              </p>
            </div>
          </div>
        );

      case "mission":
        return (
          <div>
            <h2 className="text-3xl font-bold text-center mb-4 text-lime-600">Our Mission</h2>
            <div className="flex flex-wrap items-center justify-center">
              <img src={mission} alt="Mission" className="w-full md:w-1/4 h-auto mb-4 rounded-md" data-aos="fade-right" />
              <p className="w-full md:w-1/2 text-lg text-justify text-gray-700 px-4">
                We are committed to consistently delivering high-quality products that exceed client expectations through excellence and innovation. Our mission is to ensure global accessibility to world-class display and communication solutions.
              </p>
            </div>
          </div>
        );

      case "products":
        return (
          <div>
            <h2 className="text-3xl font-bold text-center mb-4 text-lime-600">Our Products</h2>

            <div className="flex flex-wrap items-center justify-center">
              {/* Image Section */}
              <img src={product} alt="Products" className="w-full md:w-1/4 h-auto mb-4 rounded-md" data-aos="fade-right" />

              {/* Content Section */}
              <div className="w-full md:w-1/2 text-gray-700 px-4">
                <p className="text-lg text-justify mb-6">
                  We manufacture and supply stationery products, including Ceramic Writing Boards, Magnetic and Non-Magnetic Writing Boards, Display Boards with stands, Notice/Pinup Boards, Pressgraph (letter pressing boards), Welcome Boards with gold frames and golden letters, Notice Boards with sliding glass doors, and Key Boards. These products are made from high-quality raw materials sourced from reliable and trusted vendors.
                  <br />
                  <span className="font-bold mt-4 block">Following are the features of our range of products:</span>
                </p>

                {/* List of Product Features */}
                {[
                  "Non-fading writing surfaces",
                  "Soft texture and smooth finish",
                  "Durable and user-friendly design",
                  "Easy to maintain and dimensionally accurate",
                  "Clear impressions for better usability"
                ].map((feature, index) => (
                  <p key={index} className="text-gray-700 text-lg mb-2">
                    • {feature}
                  </p>
                ))}
              </div>
            </div>
          </div>

        );

      case "team":
        return (
          <div>
            <h2 className="text-3xl font-bold text-center mb-4 text-lime-600">Our Team</h2>

            <div className="flex flex-wrap items-center justify-center">
              {/* Image Section */}
              <img src={ourTeam} alt="Our Team" className="w-full md:w-1/4 h-auto mb-4 rounded-md" data-aos="fade-right" />

              {/* Content Section */}
              <div className="w-full md:w-1/2 text-gray-700 px-4">
                <p className="text-lg text-justify mb-6">
                  The name that we have earned the envy of others is due to the sincere and dedicated efforts of our workforce. In our team, we have skilled engineers, quality controllers, warehouse personnel, and dynamic sales and marketing executives. Their skills and expertise, combined with our business ethics, allow us to provide a high-quality range of products and ensure maximum client satisfaction.
                  <br />
                  <br />
                  We aim for high quality in our products, and our professionals work in close coordination to ensure smooth and effective production of stationery products. We also provide training and seminars to our workforce so that they can keep pace with the dynamic market and client requirements.                </p>

                {/* List of Roles */}
                {[
                  "Quality of Raw materials",
                  "Excellence Finished Product",
                  "Comparative Price",
                  " Customer & Product focus",
                  " Timely delivery"
                ].map((role, index) => (
                  <p key={index} className="text-gray-700 text-lg mb-2">
                    • {role}
                  </p>
                ))}
              </div>
            </div>
          </div>

        );

      case "why-us":
        return (
          <div>
            <h2 className="text-3xl font-bold text-center mb-4 text-lime-600">Why Us?</h2>

            <div className="flex flex-wrap items-center justify-center">
              {/* Image Section */}
              <img src={whyUs} alt="Why Us" className="w-full md:w-1/4 h-auto mb-4 rounded-md" data-aos="fade-right" />

              {/* Content Section */}
              <div className="w-full md:w-1/2 text-gray-700 px-4">
                <p className="text-lg text-justify mb-6">
                  We at Universe are focused and strive to address the growing needs of our clients, comprising technology, quality, durability, and reliability. Serving with the best quality and competitive price, we stand out as one of the leaders in our domain. Backed by a team of professionals with rich experience, we are engaged in manufacturing and supplying various stationery products such as ceramic writing boards, magnetic and non-magnetic writing boards, display boards with stands, notice/pinup boards, Pressgraph (letter pressing board), welcome boards with gold frames and golden letters, notice boards with sliding glass doors, and key boards.
                </p>

                {/* Content List */}
                {[
                  "Top-quality raw materials and finished products",
                  "Affordable and competitive pricing",
                  "Innovative designs and superior finishing",
                  "Minimal maintenance required",
                  "Timely deliveries for all orders",
                  "Reliable after-sales service"
                ].map((point, index) => (
                  <p key={index} className="text-gray-700 text-lg mb-2">
                    • {point}
                  </p>
                ))}
              </div>
            </div>
          </div>

        );

      default:
        return null;
    }
  };

  return (
    <div className="font-sans font-medium">
      {/* About Section */}
      <div className="grid lg:grid-cols-2 items-center gap-y-4 lg:gap-y-6 bg-black">
        <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-4" data-aos="fade-right">
          <h2 className="text-lime-600 lg:text-5xl text-4xl font-bold lg:!leading-[56px] items-center text-center">
            Our Company
          </h2>
          <p className="text-white mt-6 text-md leading-relaxed justify-center text-justify">
            Universe Visuals aims to provide our clients with the best range of products by procuring them from reliable vendors. This success is made possible by the unwavering support of our esteemed vendors, who deliver world-class products. With our offerings, we meet the expectations of various entities, including hotels, restaurants, upscale homes, hospitals, management institutes, and corporate offices.
            <br />
            <br />
            Additionally, our extensive distribution network allows us to cater to the bulk requirements of a large client base. Our satisfied clients have helped us become one of the top players in both national and international markets.
            <br />
            <br />
            Under the inspiring leadership of Mrs. Meena Harikrishnan, we have built goodwill in the industry. To lead the market in our domain, we are committed to providing nothing but the best.
          </p>
          <Link to="/Contact">
            <button
              className="font-sans mt-10 flex justify-center gap-2 items-center shadow-xl text-lg text-[#f4f5f3] bg-gradient-to-t from-[#000000] via-[#232731] to-[#a8bcdb] backdrop-blur-md lg:font-semibold border-gray-50 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
              type="button"
            >
              Get in Touch
            </button>
          </Link>
        </div>

        <div className="lg:h-[480px] flex items-center" data-aos="fade-left">
          <img
            src={about}
            className="w-full h-full rounded-3xl p-2"
            alt="About Our Company"
          />
        </div>
      </div>

      {/* Products Section */}
      <div className="flex flex-col items-center mt-5 mb-5 p-4" data-aos="fade-down">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-[#002B5B]">
          Our Famous Products
        </h1>

        <div className="flex flex-wrap justify-center gap-8 border-solid border-spacing-4 border-black" data-aos="fade-down">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative shadow-xl rounded-xl w-full sm:w-80 max-w-xs overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden rounded-t-xl h-72 group">
                <img
                  src={product.image}
                  alt={`Product ${index + 1}`}
                  className="object-fit w-full h-full transition-all duration-300 group-hover:scale-110 rounded-md"
                />

                <div className="absolute inset-0 bg-[#F8F9FA] bg-opacity-80 flex items-center justify-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
                  <p className="text-[#000000] text-xl font-semibold text-center px-6">{product.quote}</p>
                </div>
              </div>

              <div className="p-6 bg-white text-center">
                <h3 className="text-lg font-semibold text-[#002B5B] mb-2">{product.title}</h3>
                <div className="flex justify-center mt-4 gap-4">
                  <Link to="/OurProducts">
                    <button className="bg-gradient-to-t from-[#000000] via-[#22459c] to-[#4c72b0] text-[#98CE16] py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200">
                      More Products
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Management Section */}
      <div className="py-8 bg-white flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4" data-aos="fade-right">
          <h1 className="text-5xl font-bold mb-4 text-center md:text-left text-[#003366]">
            Project Management
          </h1>
          <p className="text-center md:text-left text-md leading-relaxed">
            Our Project Management team ensures seamless coordination and efficient execution of every project from start to finish. We prioritize clear communication, effective resource allocation, and timely delivery to consistently exceed client expectations. With a commitment to innovation and quality, our team drives successful project outcomes by working closely with clients to achieve their goals on time and within budget.
          </p>
        </div>

        <div className="md:w-1/2 p-4" data-aos="fade-left">
          <img
            src={ProjectManagement}
            alt="Project Management"
            className="w-full h-fit object-fit"
          />
        </div>
      </div>

      {/* About Us Tab Section */}
      <div className="about-us-section">
        {/* Tab Navigation */}
        <div className="tab-navigation flex flex-wrap justify-center space-x-2 md:space-x-4 py-4">
          {["vision", "mission", "products", "team", "why-us"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-300
              ${activeTab === tab ? "border-b-4 border-[#98CE16] bg-white text-gray-900" : "bg-transparent text-gray-700"}`}
            >
              {tab.replace("-", " ").toUpperCase()}
            </button>

          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content mt-4 md:mt-8 mb-8 bg-white border-[#092252] rounded-lg shadow-lg py-6 px-4 max-w-5xl mx-auto transition-transform duration-300 ease-in-out">
          {renderTabContent()}
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
