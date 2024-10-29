import React from 'react';
import vector from '../../assets/vector.jpg';
import experts from '../../assets/experts.png';
import { Link } from 'react-router-dom';
import industry from "../../assets/industry.jpg"

const Innovation = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 mt-9 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full" >
              <img
                alt=""
                src={industry}
                className="absolute inset-0 h-full w-full object-cover rounded-3xl"
                data-aos="fade-right"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span
              className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
            ></span>

            <div className="p-8 sm:p-16 lg:p-24" data-aos="fade-left">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Our Machinery in Action: Real Success Stories
              </h2>

              <p className="mt-4 text-gray-600 text-justify">
                At Gravity, innovation is at the core of what we do. We integrate cutting-edge technologies like artificial intelligence (AI), machine learning, and Internet of Things (IoT) into our machines to help you achieve higher precision, efficiency, and automation. Our R&D team continuously pushes the boundaries to develop equipment that will shape the future of industries globally.
              </p>

              <div data-aos="zoom-in">
              <Link to="/Contact"
                  className="mt-8 inline-block rounded border border-orange-600 bg-orange-500 px-12 py-3 text-sm font-medium text-white hover:bg-orange-600 hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  
                >
                  Get in Touch
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
