import { Link } from "react-router-dom";
import industry from "../../assets/industry.jpg";
import bgImage from "../../assets/innovation-transformed.jpg";
import { useState, useEffect } from "react";
import CountUp from "react-countup";

const Innovation = () => {
  const [sales, setSales] = useState(0);
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [products, setProducts] = useState(0);

  useEffect(() => {
    const salesTarget = 400;
    const happyCustomersTarget = 700;
    const productsTarget = 149;

    const salesInterval = setInterval(() => {
      setSales((prev) => {
        if (prev >= salesTarget) {
          clearInterval(salesInterval);
          return prev;
        }
        return prev + 50;
      });
    }, 100);

    const happyCustomersInterval = setInterval(() => {
      setHappyCustomers((prev) => {
        if (prev >= happyCustomersTarget) {
          clearInterval(happyCustomersInterval);
          return prev;
        }
        return prev + 35;
      });
    }, 100);

    const productsInterval = setInterval(() => {
      setProducts((prev) => {
        if (prev >= productsTarget) {
          clearInterval(productsInterval);
          return prev;
        }
        return prev + 10;
      });
    }, 100);

    return () => {
      clearInterval(salesInterval);
      clearInterval(happyCustomersInterval);
      clearInterval(productsInterval);
    };
  }, []);

  return (
    <section className="relative font-inter antialiased">
      <section className="relative flex flex-col justify-between gap-2 about-section pb-10 mt-5 bg-gray-200">
        <div className="container page-padding relative z-10">
          <div className="about-cards flex gap-10 -mt-[8.5rem] md1000:flex-col"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            <div className="mt-[6rem] relative col-span-1">
              <h2 className="text-3xl md:text-[36px] font-semibold leading-tight mb-6 text-blue-700">
                Innovative Technology Solutions for Your Business
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                Universe Visuals is dedicated to enhancing the educational experience with a diverse range of visual and interactive tools.
                Founded with a commitment to innovation, we offer solutions tailored to meet the unique needs of educators, students, and institutions globally.
                <br />
                <br />
                Our product lineup includes smart boards, projectors, ceramic and magnetic writing boards, and various display boards like notice boards with sliding glass doors and press graph boards.
                We continuously work to develop tools that support effective learning environments, making us a trusted partner for schools, colleges, and universities.
              </p>

            </div>
            <div className="relative w-full flex justify-center items-center">
              <img
                src={bgImage}
                alt="background"
                className="absolute inset-0 w-3/4 h-[400px] object-cover opacity-[0.7] rounded-lg max-lg:mx-auto lg:top-20 lg:left-28"
              />
              <div className="relative grid gap-6 mt-4">
                <div className="flex flex-row items-center text-center bg-white rounded-lg shadow-lg py-2 px-4 w-48 transform -translate-x-20 md:-translate-x-60 lg:-translate-x-40 mt-4 hover:scale-105 transition-all duration-300 ease-in-out">

                  <div>
                    <h2 className="uppercase font-bold text-[24px] text-primary leading-snug">
                      <CountUp end={3000} duration={20} suffix=" +" />
                    </h2>
                    <h3 className="uppercase font-semibold text-[12px] leading-snug text-gray-700">
                      Completed Projects
                    </h3>
                  </div>
                </div>
                <div className="flex flex-row items-center text-center bg-white rounded-lg shadow-lg py-2 px-4 w-48 transform translate-x-20 md:translate-x-60 lg:translate-x-60 mt-12 hover:scale-105 transition-all duration-300 ease-in-out">

                  <div>
                    <h2 className="uppercase font-bold text-[24px] text-primary leading-snug">
                      <CountUp end={1000} duration={30} suffix=" +" />
                    </h2>
                    <h3 className="uppercase font-semibold text-[12px] leading-snug text-gray-700">
                      Happy Clients
                    </h3>
                  </div>
                </div>
                <div className="flex flex-row items-center text-center bg-white rounded-lg shadow-lg py-2 px-4 w-48 transform -translate-x-20 md:-translate-x-60 lg:-translate-x-40 mt-6 hover:scale-105 transition-all duration-300 ease-in-out">

                  <div>
                    <h2 className="uppercase font-bold text-[24px] text-primary leading-snug">
                      <CountUp end={1500} duration={25} suffix=" +" />
                    </h2>
                    <h3 className="uppercase font-semibold text-[12px] leading-snug text-gray-700">
                      Customer Service
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 mt-9 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt="Industry"
                src={industry}
                className="absolute inset-0 h-full w-full object-cover md:rounded-3xl"
                data-aos="fade-right"
              />
            </div>
          </div>
          <div className="relative flex items-center bg-gray-400 md:rounded-r-3xl">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-400 md:rounded-l-3xl"></span>
            <div className="p-5 sm:p-16 lg:p-24" data-aos="fade-left">
              <h2 className="text-2xl font-bold sm:text-3xl text-blue-800">
                Our Educational Tools in Action: Real Success Stories
              </h2>
              <p className="mt-4 text-black text-justify">
                At Universe Visuals, innovation drives everything we create. We offer a wide range of products, including smart boards, projectors, and various writing boards, both ceramic and magnetic, to enhance your educational experience.
                <br />
                Our dedicated team continually develops tools such as display boards, notice boards with sliding glass doors, and press graph boards, ensuring they meet the changing needs of educators and students.
              </p>
              <div data-aos="zoom-in" className="flex justify-start">
                <Link to="/Contact">
                  <button
                    className="font-sans mt-10 flex justify-center gap-2 items-center shadow-xl text-lg text-[#ff6700] bg-white backdrop-blur-md lg:font-semibold border-gray-50 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                    type="button"
                  >
                    Get in Touch
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
