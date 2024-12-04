import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import agri from "../../assets/agri1.png";
import amusement from "../../assets/download.jpeg";
import graining from "../../assets/projector1.jpg";
import experts from "../../assets/pordium3.jpg";
import experts1 from "../../assets/green board.jpg";
import slide1 from "../../assets/hero/slide2.jpg";
import { FaWhatsapp } from "react-icons/fa";

const MainProducts = () => {
  const products = [
    {
      image: graining,
      title: "Projector",
      description:
        "Explore premium projectors from trusted brands like Benq, Epson, Sony.",
    },
    {
      image: agri,
      title: "School Scientific Laboratory",
      description:
        "Enhance learning and research with state-of-the-art laboratory equipment and advanced scientific tools for precise experimentation.",
    },
    {
      image: amusement,
      title: "Kids Indoor Game Equipment",
      description:
        "Providing safe, innovative indoor play equipment for kids, including slides.",
    },
    {
      image: experts,
      title: "Podium",
      description:
        "Manufacturing sturdy, stylish podiums for educational and professional settings.",
    },
    {
      image: experts1,
      title: "Green Board",
      description:
        "High-quality green boards for classrooms and offices, easy to maintain.",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-[80vh] bg-gray-50 py-10">
      <h2 className="text-4xl font-bold mb-10 text-[#003366] text-center">
        Major Products:
      </h2>

      <Swiper
        style={{
          "--swiper-pagination-color": "#fff",
          width: "100%",
          height: "100%",
        }}
        speed={600}
        parallax={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        modules={[Parallax, Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <div
          slot="container-start"
          className="absolute left-0 top-0 w-[160%] h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slide1})` }}
          data-swiper-parallax="-23%"
        ></div>

        {products.map((product, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="relative flex w-[300px] md:w-[300px] h-[400px] flex-col rounded-xl bg-white text-gray-700 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl my-20">
              <div
                className="relative mx-6 -mt-10 h-72 overflow-hidden rounded-2xl bg-cover bg-center text-white shadow-lg"
                data-aos="fade-down"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="absolute inset-0 opacity-10"></div>
              </div>

              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl text-center leading-snug tracking-normal text-blue-900 antialiased font-bold">
                  {product.title}
                </h5>

              </div>

              <div className="p-6 pt-0 flex justify-center">
                <a
                  href="https://wa.me/9965085475"
                  aria-label="Chat with us on WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-300 active:opacity-85 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex items-center justify-center space-x-2"
                  >
                    <FaWhatsapp className="text-white text-2xl" />
                    <span>Chat Now</span>
                  </button>

                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainProducts;
