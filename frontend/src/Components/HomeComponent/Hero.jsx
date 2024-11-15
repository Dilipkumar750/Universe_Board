import { useEffect, useState } from 'react';
import hero from '../../assets/hero.jpg';
import swiper1 from '../../assets/swiper1.jpg';
import swiper2 from '../../assets/swiper2.jpg';
import swiper3 from '../../assets/swiper3.jpg';
import swiper4 from '../../assets/swiper8.png';
import swiper5 from '../../assets/classroom.png';
import swiper6 from '../../assets/classroom2.jpg';
import swiper7 from '../../assets/swiper7.png';

const swiperImages = [hero, swiper1, swiper2, swiper3, swiper4, swiper5, swiper6, swiper7];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change the index
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % swiperImages.length);
  };

  useEffect(() => {
    // Set interval to auto-change the image every 3 seconds
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="font-[sans-serif] h-[500px] w-full overflow-hidden">
      <div className="relative w-full h-full">
        {/* Swiper (Carousel) */}
        {swiperImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh', // Full viewport height
              width: '100%', // Full width
            }}
          ></div>
        ))}

        {/* Carousel Navigation */}
        <div className="absolute z-30 flex bottom-5 left-1/2 transform -translate-x-1/2 space-x-3">
          {swiperImages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`w-3 h-3 rounded-full ${idx === currentIndex ? 'bg-white opacity-100' : 'bg-white opacity-50'}`}
              onClick={() => setCurrentIndex(idx)} // Change slide on button click
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
