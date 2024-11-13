import { useEffect, useState } from 'react';
import review from "../../assets/review.png";
import { getAllTestimonials } from '../../slices/TestimonialSlice';
import { useSelector, useDispatch } from 'react-redux';

const TestimonialCarousel = () => {
  const dispatch = useDispatch();
  const { data: testimonials, loading, error } = useSelector((state) => state.testimonial.getAllTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (testimonials?.length) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  useEffect(() => {
    let interval;
    if (testimonials?.length) {
      interval = setInterval(nextSlide, 3000);
    }
    return () => clearInterval(interval);
  }, [testimonials]);

  useEffect(() => {
    dispatch(getAllTestimonials());
  }, [dispatch]);

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
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return stars;
  };

  if (loading) {
    return <div>Loading testimonials...</div>;
  }

  if (error) {
    return <div>Error loading testimonials: {error}</div>;
  }

  if (!testimonials || testimonials.length === 0) {
    return <div>No testimonials available.</div>;
  }

  return (
    <div className="font-[sans-serif] bg-blue-300 py-12 px-6 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center text-white mb-10">Our Clients Say:</h1>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md md:max-w-lg md:order-1 text-center">
          <p className="text-xl font-semibold mb-4">{`"${testimonials[currentIndex]?.text}"`}</p>
          <p className="font-medium">{testimonials[currentIndex]?.name}</p>
          <p className="text-gray-500">{testimonials[currentIndex]?.title}</p>
          <div className="flex justify-center mt-2">
            {renderStars(testimonials[currentIndex]?.rating)}
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
