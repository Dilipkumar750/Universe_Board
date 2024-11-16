import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import agri from "../../assets/agri.jpg";
import amusement from "../../assets/download.jpeg";
import graining from "../../assets/projector1.jpg";
import experts from "../../assets/pordium3.jpg";
import experts1 from "../../assets/green board.jpg";
import slide1 from "../../assets/hero/slide2.jpg";

const MainProducts = () => {
  const products = [
    {
      image: graining,
      title: "Projector",
      description:
        "Explore our wide selection of premium projectors from trusted brands like Benq, Epson, Hitachi, Sony, and more.",
    },
    {
      image: agri,
      title: "Whiteboard Projector Screen",
      description:
        "Enhance your presentations with our high-quality projector screens, designed with a whiteboard surface for seamless integration.",
    },
    {
      image: amusement,
      title: "Kids Indoor Game Equipment",
      description:
        "Providing innovative and safe indoor play equipment for kids, including slides, swings, and more, tailored to create a fun learning environment.",
    },
    {
      image: experts,
      title: "Podium",
      description:
        "Manufacturing sturdy and stylish podiums for educational and professional settings, designed for ease of use and long-lasting durability.",
    },
    {
      image: experts1,
      title: "Green Board",
      description:
        "High-quality green boards perfect for classrooms and offices, offering smooth writing surfaces that are easy to clean and maintain.",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-[80vh] bg-gray-50 py-10">
      <h2 className="text-2xl font-bold mb-10 text-[#0277BD] text-center">
        Major Products
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
            slidesPerView: 1, // 1 card on mobile
          },
          768: {
            slidesPerView: 2, // 2 cards on tablet
          },
          1024: {
            slidesPerView: 3, // 3 cards on laptop
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
              {/* Card with background image and gradient overlay */}
              <div
                className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-cover bg-center text-white shadow-lg shadow-blue-500/40"
                style={{ backgroundImage: `url(${product.image})` }}
              >
                {/* Optional: Overlay for a modern effect */}
                <div className="absolute inset-0 bg-black opacity-10"></div>
              </div>

              {/* Heading and description below the image */}
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {product.title}
                </h5>
                <p className="block font-sans text-bold  leading-relaxed text-inherit antialiased">
                  {product.description}
                </p>
              </div>

              {/* Button section */}
              <div className="p-6 pt-0">
                <a href="https://wa.me/9965085475">
                  <button className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Chat Now..
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
