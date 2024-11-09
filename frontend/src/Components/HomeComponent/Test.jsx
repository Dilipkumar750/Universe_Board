import { useEffect, useState } from 'react';
import review from "../../assets/review.png";

const testimonials = [
  { 
    name: "John Doe", 
    title: "CEO of Company A", 
    text: "This service is amazing! It has changed my life for the better.", 
    rating: 5 
  },
  { 
    name: "Jane Smith", 
    title: "Marketing Manager", 
    text: "The experience was fantastic. Highly recommended for anyone looking to improve their business.", 
    rating: 4 
  },
  { 
    name: "Alice Johnson", 
    title: "Project Lead", 
    text: "A wonderful product! It has helped us increase efficiency and productivity.", 
    rating: 5 
  },
  { 
    name: "Bob Brown", 
    title: "Entrepreneur", 
    text: "I couldn't be happier with the results. Excellent customer support as well.", 
    rating: 4 
  },
  { 
    name: "Charlie Lee", 
    title: "Product Designer", 
    text: "Professional and reliable service. I would definitely work with them again.", 
    rating: 5 
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg 
          key={i} 
          xmlns="http://www.w3.org/2000/svg" 
          className={`w-5 h-5 ${i <= rating ? 'text-yellow-500' : 'text-gray-300'}`} 
          fill="currentColor" 
          viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="font-[sans-serif] bg-gray-500 py-12 px-6 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center text-white mb-10">Our Clients Say:</h1>
      
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
        
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md md:max-w-lg md:order-1 text-center">
          <p className="text-xl font-semibold mb-4">{`"${testimonials[currentIndex].text}"`}</p>
          <p className="font-medium">{testimonials[currentIndex].name}</p>
          <p className="text-gray-500">{testimonials[currentIndex].title}</p>
          <div className="flex justify-center mt-2">
            {renderStars(testimonials[currentIndex].rating)}
          </div>
        </div>

        <div className="relative hidden md:block md:w-1/2 lg:w-[550px]">
          <img src={review} alt="Review" className="object-cover h-full w-full rounded-lg shadow-lg" />
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              className="p-2 bg-gray-500 hover:bg-gray-700 rounded-full"
              onClick={() => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)}
            >
              <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M15.75 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              className="p-2 bg-gray-500 hover:bg-gray-700 rounded-full"
              onClick={() => setCurrentIndex((currentIndex + 1) % testimonials.length)}
            >
              <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M8.25 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>

      </div>

      <div className="mt-6 flex space-x-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`w-3 h-3 rounded-full ${idx === currentIndex ? 'bg-white' : 'bg-white opacity-50'}`}
            onClick={() => setCurrentIndex(idx)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
