import React, { useState, useEffect } from "react";
import hand1 from "../../assets/hands/hand1.jpg";
import hand2 from "../../assets/hands/hand2.jpg";
import hand3 from "../../assets/hands/hand3.jpg";

const testimonials = [
  {
    image: hand1,
    name: "John Doe",
    email: "johndoe23@gmail.com",
    content: "The benches are sturdy and very comfortable for students.",
  },
  {
    image: hand2,
    name: "Jane Smith",
    email: "janesmith89@gmail.com",
    content: "The tables are customizable and fit perfectly in our classroom.",
  },
  {
    image: hand3,
    name: "Alice Brown",
    email: "alicebrown456@gmail.com",
    content: "The boards are excellent for teaching, with a smooth surface.",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const fadeInOutStyle = {
    animation: "fadeInOut 3s ease-in-out infinite",
  };

  const keyframes = `
    @keyframes fadeInOut {
      0% {
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    @keyframes floating {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-15px);
      }
      100% {
        transform: translateY(0px);
      }
    }

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <>
    <h2
        className="text-4xl font-extrabold text-center mt-10 text-blue-800"
        data-aos="fade-up"
      >
       Our Clients Says:
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
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="object-cover md:h-[250px] md:w-[250px] h-[150px] w-[150px] rounded-full shadow-lg"
            />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                {testimonials[currentIndex].name}
              </h4>
            </div>
          </div>

          <div className="relative bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">
              Classroom Furniture Designed for Learning.
            </h2>
            <p
              style={fadeInOutStyle}
              className="mt-4 text-gray-600 text-sm"
              key={currentIndex}
            >
              {testimonials[currentIndex].content}
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
