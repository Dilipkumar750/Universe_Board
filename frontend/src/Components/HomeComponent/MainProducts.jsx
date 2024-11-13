import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './swiper.css';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import agri from '../../assets/agri.jpg';
import amusement from '../../assets/download.jpeg';
import graining from '../../assets/projector1.jpg';
import experts from '../../assets/pordium3.jpg';
import experts1 from '../../assets/green board.jpg';

const MainProducts = () => {
  const products = [
    { image: graining, title: 'Projector', description: 'Explore our wide selection of premium projectors from trusted brands like Benq, Epson, Hitachi, Sony, and more.' },
    { image: agri, title: 'Whiteboard Projector Screen', description: 'Enhance your presentations with our high-quality projector screens, designed with a whiteboard surface for seamless integration.' },
    { image: amusement, title: 'Kids Indoor Game Equipment', description: 'Providing innovative and safe indoor play equipment for kids, including slides, swings, and more, tailored to create a fun learning environment.' },
    { image: experts, title: 'Podium', description: 'Manufacturing sturdy and stylish podiums for educational and professional settings, designed for ease of use and long-lasting durability.' },
    { image: experts1, title: 'Green Board', description: 'High-quality green boards perfect for classrooms and offices, offering smooth writing surfaces that are easy to clean and maintain.' },
  ];
  

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-400 py-5">
      <h2 className="text-4xl font-bold mb-8 text-blue-800">Major Products</h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper w-full"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-xl w-80 border border-red-500">
              <div className="p-4 text-center h-32">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>
              </div>
              <div className="overflow-hidden rounded-t-xl h-64 group p-3 rounded-sm">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="flex justify-center p-4">
                <a href="https://wa.me/9965085475">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-slate-600">
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
