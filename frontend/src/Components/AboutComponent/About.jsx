import React from "react";
import about from "../../assets/Exhibition Display Boards.png";
import imageOne from "../../assets/greenchalk borad.png";
import imageTwo from "../../assets/kinds- school-desk.png";
import imageThree from "../../assets/projector.png";
import imageFour from "../../assets/single seating desk.png";
import vision from "../../assets/vision.jpg";
import mission from "../../assets/mission.jpg";
import lowPrice from "../../assets/low-price.jpg";
import ourTeam from "../../assets/ourTeam.jpg";
import whyUs from "../../assets/whyUs.jpg";
import { Link } from "react-router-dom";
import CompanyProfile from "./CompanyProfile";
import WarehousingPackaging from "./WarehousingPackaging";

const products = [
  { image: imageOne },
  { image: imageTwo },
  { image: imageThree },
  { image: imageFour },
];

const About = () => {
  return (
    <div className="font-sans">
      <div className="grid lg:grid-cols-2 items-center lg:gap-y-6 bg-black">
        <div
          className="max-lg:order-1 max-lg:text-center sm:p-12 p-4"
          data-aos="fade-right">
          <h2 className="text-white lg:text-5xl text-4xl font-bold lg:!leading-[56px] items-center text-center">
            Our Company
          </h2>
          <p className="text-white mt-6 text-base leading-relaxed justify-center text-justify">
            Universe Educational Visuals believe aim at providing our clients
            with the best product range and therefore procure the products from
            reliable vendors. This has also been made possible with the undying
            support of our reputed vendors, who only deliver world class
            products. With our products, we have been able to stand up to the
            expectations of various entities like hotels and restaurants, upper
            class homes, hospitals, management institutes and corporate offices.
            Moreover, with our wide distribution network, we have been able to
            cater to the bulk requirements of a huge client base. Our well
            contented clients have enabled us to be one of the topmost players
            at national and international arenas.
          </p>
          <br />
          <p className="text-white mt-4 text-base leading-relaxed text-justify">
            Under the inspiring leadership of Mrs. Meena Harikrishnan, we have
            achieved goodwill in the industry. With an aim of leading the market
            in our domain, we have been putting in all of our efforts to make
            sure that we provide nothing but the best.
          </p>
          <Link to={"/Contact"}>
            <button
              type="button"
              className="bg-black border-2 mt-12 text-white font-bold text-sm rounded-xl px-6 py-2.5 item-center">
              Get Started
            </button>
          </Link>
        </div>

        <div className="lg:h-[480px] flex items-center" data-aos="fade-left">
          <img
            src={about}
            className="w-full h-full  rounded-3xl p-2"
            alt="About Our Company"
          />
        </div>
      </div>

      <div className="flex flex-col bg-black items-center mt-5 mb-5 p-4">
        <h1 className="text-3xl font-bold mb-4 text-center text-orange-500">
          Our Famous Products
        </h1>

        <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up">
          {products.map((product, index) => (
            <div
              key={index}
              className="shadow-md rounded-xl w-full sm:w-80 border border-orange-500">
              <div className="overflow-hidden rounded-t-xl h-64 group p-3 rounded-sm">
                <img
                  src={product.image}
                  alt={`Product ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110 rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-8 bg-gray-300">
        <h1 className="text-3xl font-bold mb-4 text-center text-orange-500">
          Project Management
        </h1>
        <p className="w-full sm:w-1/2 mx-auto text-center">Our Project Management team ensures seamless coordination and efficient execution of each project from start to finish. We prioritize clear communication, effective resource allocation, and timely delivery to exceed client expectations. With a commitment to innovation and quality, our team drives successful project outcomes, working closely with clients to achieve their goals on time and within budget.</p>
      </div>
      <div className="bg-black">
        <div className="mt-8 max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-8">
            <div
              className="lg:w-3/4 p-4 lg:text-left text-center"
              data-aos="fade-right">
              <h1 className="text-3xl font-bold mb-4 text-orange-500">
                Vision
              </h1>
              <p className="text-xl text-justify text-white">
                Universe Educational Visuals envisions being a global leader in
                providing premium, innovative, and reliable educational and
                display products. Our goal is to empower institutions, corporate
                entities, and homes worldwide by offering solutions that enhance
                visual communication, enrich learning experiences, and inspire
                environments to foster creativity and productivity.
              </p>
            </div>

            <div className="lg:w-1/2 p-4 flex justify-center">
              <img
                src={vision}
                alt="Vision Image"
                className="w-52 h-52 object-cover rounded-full"
                data-aos="fade-left"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-between mb-8">
            <div
              className="lg:w-3/4 p-4 lg:text-right text-center"
              data-aos="fade-left">
              <h1 className="text-3xl font-bold mb-4 text-orange-500">
                Mission
              </h1>
              <p className="text-xl text-justify text-white">
                Our mission is to consistently deliver quality products that
                exceed client expectations through a commitment to excellence,
                reliability, and innovation. By working closely with reputable
                vendors and maintaining a strong distribution network, we aim to
                ensure our clients have seamless access to world-class display
                and communication solutions, meeting their unique needs in both
                national and international markets.
              </p>
            </div>

            <div
              className="lg:w-1/2 p-4 flex justify-center"
              data-aos="fade-right">
              <img
                src={mission}
                alt="Mission Image"
                className="w-52 h-52 object-cover rounded-full"
                data-aos="fade-right"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-8">
            <div
              className="lg:w-3/4 p-4 lg:text-left text-center"
              data-aos="fade-right">
              <h1 className="text-3xl font-bold mb-4 text-orange-500">
                Our Products
              </h1>
              <p className="text-xl text-justify text-white mb-2">
                We are engaged in manufacturing and supplying of stationary
                products including like - Ceramic Writing Boards, Magnetic &
                Non-Magnetic Writing Boards, Display Board with stand,
                Notice/Pinup Boards, Pressgraph (Letter pressing board), Welcome
                Board with Gold frame & Golden letters, Notice board with
                sliding Glass Door, Key Boards.These are manufactured with the
                best quality of raw material sourced from reliable and trusted
                vendors.
              </p>
              <b className="text-white text-xl">
                Following are the features of our range of products :
              </b>
              <ul className="list-disc text-start text-white md:ps-10 mt-3">
                <li>Non-fading writing surfaces</li>
                <li>Soft texture</li>
                <li>Durable & user friendly</li>
                <li>Smooth finish</li>
                <li>Classic style & design</li>
                <li>Easy to maintain</li>
                <li>Dimensionally accurate</li>
                <li>Clear impressions</li>
              </ul>
            </div>

            <div className="lg:w-1/2 p-4 flex justify-center">
              <img
                src={lowPrice}
                alt="Selling Image"
                className="w-52 h-52 object-cover rounded-full"
                data-aos="fade-left"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-between mb-8">
            <div
              className="lg:w-3/4 p-4 lg:text-right text-center"
              data-aos="fade-right">
              <h1 className="text-3xl font-bold mb-4 text-orange-500">
                Our Team
              </h1>
              <p className="text-xl text-justify text-white mb-2">
                The name which we have gained to envy on is due to the sincere
                and remitting efforts of our workforce. In our team we have
                skilled engineers, quality controllers, warehouse personnel and
                dynamic sales & marketing executives. Their skill and expertise
                mixed with our business ethics enable us to offer a quality
                range of products and ensure utmost client satisfaction.
              </p>
              <p className="text-xl text-justify text-white mb-2">
                Aiming high-quality for our products our professional work in
                close coordination with each other ensuring smooth and effective
                production of stationary products. Also we provide training and
                seminars to our workforce so that they can pace with the dynamic
                market and client requirements.
              </p>
              <ul className="list-disc text-start text-white md:ps-10  mt-3">
                <li>Quality of Raw materials</li>
                <li>Excellence Finished Product</li>
                <li>Comparative Price</li>
                <li>Customer & Product focus</li>
                <li>Timely delivery</li>
              </ul>
            </div>

            <div className="lg:w-1/2 p-4 flex justify-center">
              <img
                src={ourTeam}
                alt="Selling Image"
                className="w-52 h-52 object-cover rounded-full"
                data-aos="fade-left"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-8">
            <div
              className="lg:w-3/4 p-4 lg:text-left text-center"
              data-aos="fade-right">
              <h1 className="text-3xl font-bold mb-4 text-orange-500">
              Why Us?
              </h1>
              <p className="text-xl text-justify text-white mb-2">We at Universe were focused and strive to deal with the growing needs of the client, comprising technology, quality, durability and reliability. Serving with the best quality and competitive price we stand out as one of the leader in our domain. Backed by a team of professional with rich experience we are engaged in manufacturing and supplying of various stationary products like Ceramic Writing Boards, Magnetic & Non-Magnetic Writing Boards, Display Board with Stand, Notice/Pinup Boards, Pressgraph (Letter Pressing Board), Welcome Board with Gold frame & Golden letters, Notice board with sliding Glass Door, Key Boards.</p>
              <b className="text-white text-xl">Major distinctive features are :</b>
              <ul className="list-disc text-start text-white md:ps-10  mt-3">
                <li>Flawless quality of raw and finished product</li>
                <li>Competitive price</li>
                <li>Innovative designs and perfect finishing</li>
                <li>Least maintenance</li>
                <li>Timely delivery</li>
                <li>After sales services</li>
              </ul>
            </div>

            <div className="lg:w-1/2 p-4 flex justify-center">
              <img
                src={whyUs}
                alt="Selling Image"
                className="w-52 h-52 object-cover rounded-full"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <CompanyProfile /> */}
      {/* <WarehousingPackaging /> */}
    </div>
  );
};

export default About;
