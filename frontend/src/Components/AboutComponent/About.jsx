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
import Projectmagement from "../../assets/project.jpg"

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
          data-aos="fade-right"
        >
          <h2 className="text-white lg:text-5xl text-4xl font-bold lg:!leading-[56px] items-center text-center">
            Our Company
          </h2>
          <p className="text-white mt-6 text-base leading-relaxed justify-center text-justify">
            Universe Educational Visuals aims to provide our clients with the
            best range of products by procuring them from reliable vendors. This
            success is made possible by the unwavering support of our esteemed
            vendors, who deliver world-class products. With our offerings, we
            meet the expectations of various entities, including hotels,
            restaurants, upscale homes, hospitals, management institutes, and
            corporate offices. <br />
            Additionally, our extensive distribution network allows us to cater
            to the bulk requirements of a large client base. Our satisfied
            clients have helped us become one of the top players in both
            national and international markets.
          </p>
          <br />
          <p className="text-white mt-4 text-base leading-relaxed text-justify">
            Under the inspiring leadership of Mrs. Meena Harikrishnan, we have
            built goodwill in the industry. To lead the market in our domain, we
            are committed to providing nothing but the best.
          </p>
          <Link to={"/Contact"}>
            <button
              type="button"
              className="bg-black border-2 mt-12 text-white font-bold text-sm rounded-xl px-6 py-2.5 item-center"
            >
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
              className="shadow-md rounded-xl w-full sm:w-80 border border-orange-500"
            >
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

      <div className="py-8 bg-white flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <h1 className="text-5xl font-bold mb-4 text-center md:text-left text-orange-500">
            Project Management
          </h1>
          <p className="text-center md:text-left font-serif text-xl leading-relaxed">
            Our Project Management team ensures seamless coordination and
            efficient execution of every project from start to finish. We
            prioritize clear communication, effective resource allocation, and
            timely delivery to consistently exceed client expectations. With a
            commitment to innovation and quality, our team drives successful
            project outcomes by working closely with clients to achieve their
            goals on time and within budget.
          </p>
        </div>

        <div className="md:w-1/2 p-4">
          <img
            src={Projectmagement}
            alt="Project Management"
            className="w-full h-fit object-fit"
          />
        </div>
      </div>

      <div className="bg-black">
        <div className="mt-8 max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-8">
            <div
              className="lg:w-3/4 p-4 lg:text-left text-center"
              data-aos="fade-right"
            >
              <h1 className="text-3xl font-bold mb-4 text-orange-500">
                Vision
              </h1>
              <p className="text-xl text-justify text-white">
                Universe Educational Visuals aims to be a global leader in
                premium, innovative, and reliable educational and display
                products. Our goal is to empower institutions, corporate
                entities, and homes worldwide by offering solutions that enhance
                visual communication, enrich learning experiences, and inspire
                creativity and productivity.
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
              data-aos="fade-left"
            >
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
              data-aos="fade-right"
            >
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
              data-aos="fade-right"
            >
              <h1 className="text-3xl font-bold mb-4 text-orange-500">
                Our Products
              </h1>
              <p className="text-xl text-justify text-white mb-2">
                We manufacture and supply stationery products, including Ceramic
                Writing Boards, Magnetic and Non-Magnetic Writing Boards,
                Display Boards with stands, Notice/Pinup Boards, Pressgraph
                (letter pressing boards), Welcome Boards with gold frames and
                golden letters, Notice Boards with sliding glass doors, and Key
                Boards. These products are made from high-quality raw materials
                sourced from reliable and trusted vendors.
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
              data-aos="fade-left"
            >
              <h1 className="text-3xl font-bold mb-4 text-orange-500">
                Our Team
              </h1>
              <p className="text-xl text-justify text-white mb-2">
                The name that we have earned the envy of others is due to the
                sincere and dedicated efforts of our workforce. In our team, we
                have skilled engineers, quality controllers, warehouse
                personnel, and dynamic sales and marketing executives. Their
                skills and expertise, combined with our business ethics, allow
                us to provide a high-quality range of products and ensure
                maximum client satisfaction.
              </p>
              <p className="text-xl text-justify text-white mb-2">
                We aim for high quality in our products, and our professionals
                work in close coordination to ensure smooth and effective
                production of stationery products. We also provide training and
                seminars to our workforce so that they can keep pace with the
                dynamic market and client requirements.
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
                data-aos="fade-right"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-8">
            <div
              className="lg:w-3/4 p-4 lg:text-left text-center"
              data-aos="fade-right"
            >
              <h1 className="text-3xl font-bold mb-4 text-orange-500">
                Why Us?
              </h1>
              <p className="text-xl text-justify text-white mb-2">
                We at Universe are focused and strive to address the growing
                needs of our clients, comprising technology, quality,
                durability, and reliability. Serving with the best quality and
                competitive price, we stand out as one of the leaders in our
                domain. Backed by a team of professionals with rich experience,
                we are engaged in manufacturing and supplying various stationery
                products such as ceramic writing boards, magnetic and
                non-magnetic writing boards, display boards with stands,
                notice/pinup boards, Pressgraph (letter pressing board), welcome
                boards with gold frames and golden letters, notice boards with
                sliding glass doors, and key boards.
              </p>
              <b className="text-white text-xl">
                Major distinctive features are :
              </b>
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
