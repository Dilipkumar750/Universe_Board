import React, { useEffect, useState } from 'react';
import forklift from '../../assets/forklift.jpeg';
import logo from '../../assets/logo.png';
import hero from '../../assets/hero.jpg';
import swiper1 from '../../assets/swiper1.jpg';
import swiper2 from '../../assets/swiper2.jpg';
import swiper3 from '../../assets/swiper3.jpg';
import swiper4 from '../../assets/swiper8.png';
import swiper5 from '../../assets/projector1.jpg';
import swiper6 from '../../assets/swiper6.jpg';
import swiper7 from '../../assets/swiper7.png';

const swiperImages = [hero, swiper1, swiper2, swiper3, swiper4, swiper5, swiper6, swiper7];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change the index
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % swiperImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="font-[sans-serif] max-w-6xl max-md:max-w-md mx-auto ">
      <div className="grid md:grid-cols-2 items-center md:gap-10 gap-6">
        <div className="max-md:order-1 max-md:text-center">
          <p className="mt-4 text-3xl font-bold text-orange-500">
            <span className="rotate-90 inline-block mr-2 mb-2">|</span> Universe Educational Visuals
          </p>
          <h2 className="text-gray-800 md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]">
          Enriching Classrooms with Quality School Essentials.          </h2>
          <p className="mt-5 text-base text-gray-500 leading-relaxed">
          Enhance the learning environment with our carefully selected school essentials, delivered right to your door. Transform your space into an inspiring place to learn today.          </p>

          <div className="mt-10 flex px-4 py-4 rounded-lg bg-gray-100 overflow-hidden">
            <input type="email" placeholder="Search Something..." className="w-full outline-none bg-transparent text-sm" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="20px"
              className="cursor-pointer fill-gray-400"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
          </div>
        </div>

        <div className="hidden md:flex md:h-[400px] md:w-[550px] p-2 overflow-x-hidden  flex-col" data-aos="fade-left">
          {/* Custom carousel with automatic scroll */}
          <div className="relative w-full h-full overflow-hidden rounded-lg p-1"> {/* Added padding here */}
            {swiperImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  padding: '5px', 
                  height: 'calc(100% - 1px)', 
                  width: 'calc(100% - 20px)',
                  boxSizing: 'border-box',
                }}
              ></div>
            ))}
            <div className="absolute z-30 flex bottom-5 left-1/2 transform -translate-x-1/2 space-x-3">
              {swiperImages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`w-3 h-3 rounded-full ${idx === currentIndex ? 'bg-white opacity-100' : 'bg-white opacity-50'}`}
                  onClick={() => setCurrentIndex(idx)}
                ></button>
              ))}
            </div>
            <button className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer" onClick={() => setCurrentIndex((currentIndex - 1 + swiperImages.length) % swiperImages.length)}>
             
              <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M15.75 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer" onClick={() => setCurrentIndex((currentIndex + 1) % swiperImages.length)}>
              
              <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M8.25 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>

      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
        <img src="https://readymadeui.com/google-logo.svg" className="w-28 mx-auto" alt="google-logo" data-aos="fade-up" />
        <img src="https://readymadeui.com/facebook-logo.svg" className="w-28 mx-auto" alt="facebook-logo" data-aos="fade-down" />
        <img src="https://readymadeui.com/linkedin-logo.svg" className="w-28 mx-auto" alt="linkedin-logo" data-aos="fade-up" />
        <img src="https://readymadeui.com/pinterest-logo.svg" className="w-28 mx-auto" alt="pinterest-logo" data-aos="fade-down" />
      </div>
    </div>
  );
};

export default Hero;
