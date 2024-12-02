import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTestimonials } from "../../slices/testimonialSlice";
import { FaStar } from "react-icons/fa"; 
import hand1 from "../../assets/hands/hand1.jpg";
import hand2 from "../../assets/hands/hand2.jpg";
import hand3 from "../../assets/hands/hand3.jpg";

const TestimonialCarousel = () => {
  const dispatch = useDispatch();
  const { data: testimonials, error, loading } = useSelector(
    (state) => state.testimonial.getAllTestimonials
  );

  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    if (!testimonials) {
      dispatch(getAllTestimonials());
    }
  }, [dispatch, testimonials]);

  useEffect(() => {
    if (testimonials && testimonials.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [testimonials]);

  if (loading) {
    return <p className="text-center">Loading testimonials...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error loading testimonials: {error}</p>;
  }

  if (!testimonials || testimonials.length === 0) {
    return <p className="text-center">No testimonials available.</p>;
  }
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`text-yellow-500 ${i <= rating ? "filled" : ""}`}
        />
      );
    }
    return stars;
  };

  const fadeInOutStyle = {
    animation: "fadeInOut 3s ease-in-out infinite",
  };

  const keyframes = `
    @keyframes fadeInOut {
      0% { opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { opacity: 0; }
    }
    @keyframes floating {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
      100% { transform: translateY(0px); }
    }
  `;

  const getHandImage = (index) => {
    if (index === 0) return hand1;
    if (index === 1) return hand2;
    return hand3;
  };

  return (
    <>
      <h2 className="text-4xl font-extrabold text-center mt-10 text-blue-800" data-aos="fade-up">
        Our Clients Say:
      </h2>
      <style>{keyframes}</style>
      <div className="relative px-4 py-10 max-w-5xl mx-auto font-[sans-serif] my-6">
        <div
          className="absolute w-40 h-40 bg-blue-300 rounded-full opacity-50 -top-10 right-10 md:-top-10 md:-left-32"
          style={{ animation: "floating 4s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute w-16 h-16 bg-orange-300 opacity-70 rounded-md top-20 right-10"
          style={{ animation: "rotate 6s linear infinite" }}
        ></div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center space-x-6">
            <img
              src={testimonials[currentIndex]?.image || getHandImage(currentIndex)} 
              alt={testimonials[currentIndex]?.name}
              className="object-cover md:h-[250px] md:w-[250px] h-[150px] w-[150px] rounded-full shadow-lg"
            />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                {testimonials[currentIndex]?.name}
              </h4>
              <div className="flex">{renderStars(testimonials[currentIndex]?.rating)}</div>
            </div>
          </div>

          <div className="relative bg-gray-100 p-6 rounded-lg shadow-md">
            <p style={fadeInOutStyle} className="mt-4 text-gray-600 text-sm" key={currentIndex}>
              {testimonials[currentIndex]?.text}
            </p>

            <div
              className="absolute w-10 h-10 bg-blue-500 rounded-full top-[-20px] right-[-20px]"
              style={{ animation: "floating 3s ease-in-out infinite" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCarousel;
