import { Swiper, SwiperSlide } from "swiper/react";
import { FaSchool, FaChair, FaBook } from "react-icons/fa";  // For classroom-related icons
import { FaPaintBrush, FaTools, FaHammer } from "react-icons/fa"; // For customizable designs
import { FaWrench, FaBuilding, FaStar } from "react-icons/fa";  // For durability
import { FaMoneyBill, FaChartLine, FaCheckCircle } from "react-icons/fa"; // For affordability

import swiper1 from "../../assets/hero/slide1.jpg";
import swiper2 from "../../assets/hero/slide2.jpg";
import swiper3 from "../../assets/hero/slide3.jpg";
import swiper4 from "../../assets/hero/slide4.jpg";
import logo from "../../assets/logo.png";  // Your shop's logo

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Pagination } from "swiper/modules";

const slides = [
  {
    image: swiper1,
    title: "Welcome to Classroom Bench Makers",
    description: "We design durable and comfortable benches to create the best learning environment.",
    icons: [<FaSchool key="school" />, <FaChair key="chair" />, <FaBook key="book" />],
  },
  {
    image: swiper2,
    title: "Customizable Designs",
    description: "Our benches are tailored to suit various classroom sizes and themes.",
    icons: [<FaPaintBrush key="paint" />, <FaTools key="tools" />, <FaHammer key="hammer" />],
  },
  {
    image: swiper3,
    title: "Durability Guaranteed",
    description: "Our benches are made with high-quality materials for long-lasting use.",
    icons: [<FaWrench key="wrench" />, <FaBuilding key="building" />, <FaStar key="star" />],
  },
  {
    image: swiper4,
    title: "Affordable Prices",
    description: "We offer the best quality at prices that fit your budget.",
    icons: [<FaMoneyBill key="money" />, <FaChartLine key="chart" />, <FaCheckCircle key="check" />],
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
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen w-full">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="object-cover h-full w-full"
              />
              <div className="absolute inset-0 flex justify-end items-center p-8">
                <div className="bg-blue-100/50 backdrop-blur-sm rounded-[50px] p-8 shadow-lg text-center max-w-lg">
                  
                  {/* Logo and Shop Name at the Top */}
                 <div className="h-24 w-28 mx-auto">
                  <img src={logo} className=""/>
                 </div>

                  {/* Card Content */}
                  <h1 className="text-2xl font-bold text-gray-800">{slide.title}</h1>
                  <p className="text-gray-800 mt-4">{slide.description}</p>
                  <div className="flex justify-center mt-4 gap-4">
                    {slide.icons.map((icon) => icon)}
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
