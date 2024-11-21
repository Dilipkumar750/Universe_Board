import { Swiper, SwiperSlide } from "swiper/react";
import { FaWarehouse, FaClipboard, FaRulerCombined } from "react-icons/fa";
import { FaTree, FaLayerGroup, FaShapes } from "react-icons/fa";
import { FaShieldAlt, FaToolbox, FaStar } from "react-icons/fa";
import { FaMoneyBill, FaBalanceScale, FaCheckCircle } from "react-icons/fa";

import swiper1 from "../../assets/hero/slide1.jpg";
import swiper2 from "../../assets/hero/slide2.jpg";
import swiper3 from "../../assets/hero/slide3.jpg";
import swiper4 from "../../assets/hero/slide4.jpg";
import logo from "../../assets/logo.png";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const slides = [
  {
    image: swiper1,
    title: "Welcome to Premium Board Suppliers",
    description: "We provide high-quality boards for all your construction and furnishing needs.",
    icons: [<FaWarehouse key="warehouse" />, <FaClipboard key="clipboard" />, <FaRulerCombined key="ruler" />],
  },
  {
    image: swiper2,
    title: "Wide Range of Options",
    description: "Choose from a variety of boards, including plywood, MDF, particle boards, and more.",
    icons: [<FaTree key="tree" />, <FaLayerGroup key="layers" />, <FaShapes key="shapes" />],
  },
  {
    image: swiper3,
    title: "Unmatched Durability",
    description: "Our boards are crafted to endure wear and tear, ensuring lasting performance.",
    icons: [<FaShieldAlt key="shield" />, <FaToolbox key="toolbox" />, <FaStar key="star" />],
  },
  {
    image: swiper4,
    title: "Competitive Pricing",
    description: "Get premium boards at prices that offer great value for your money.",
    icons: [<FaMoneyBill key="money" />, <FaBalanceScale key="scale" />, <FaCheckCircle key="check" />],
  },
];

export default function App() {
  return (
    <div className="h-screen w-full relative -mt-20">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1500}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className}" aria-label="Go to slide ${index + 1}"></span>`,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen w-full">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="object-cover h-full w-full"
                loading="lazy"
                onError={(e) => (e.target.src = "/fallback-image.jpg")} // Fallback for broken image links
              />
              <div className="absolute inset-0 flex justify-end items-center p-8">
                <div className="bg-blue-100/50 backdrop-blur-sm rounded-[50px] p-8 shadow-lg text-center max-w-lg">
                  {/* Logo at the top */}
                  <div className="h-32 w-36 mx-auto">
                    <img src={logo} alt="Company Logo" className="h-full w-full object-contain" />
                  </div>
                  {/* Card Content */}
                  <h1 className="text-2xl font-bold text-gray-800">{slide.title}</h1>
                  <p className="text-gray-800 mt-4">{slide.description}</p>
                  <div className="flex justify-center mt-4 gap-4">
                    {slide.icons.map((icon, i) => (
                      <div key={i} className="hover:text-blue-600 transition duration-200">
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
