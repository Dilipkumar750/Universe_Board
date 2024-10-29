import React from "react";
import vector from "../../assets/vector.jpg";
import { Link } from "react-router-dom";
import industry from "../../assets/industry.jpg";

const Innovation = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 mt-9 lg:px-8">
        <div className="grid grid-cols-1  lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt=""
                src={industry}
                className="absolute inset-0 h-full w-full object-cover md:rounded-3xl"
                data-aos="fade-right"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-black md:rounded-r-3xl">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-black md:rounded-l-3xl"></span>

            <div className="p-5 sm:p-16 lg:p-24" data-aos="fade-left">
              <h2 className="text-2xl font-bold sm:text-3xl text-white">
                Our Educational Tools in Action: Real Success Stories
              </h2>

              <p className="mt-4 text-white text-justify">
                At Universe Educational Visuals, innovation drives everything we
                create. We offer a wide range of products, including smart
                boards, projectors, and various writing boards—both ceramic and
                magnetic—to enhance your educational experience. Our dedicated
                team continuously develops tools like display boards, notice
                boards with sliding glass doors, and pressgraph boards, ensuring
                they meet the evolving needs of educators and learners. With our
                premium selection, including welcome boards with gold frames and
                educational instruments, we are committed to shaping the future
                of education, making it more interactive and engaging for
                everyone.
              </p>

              <div data-aos="zoom-in">
                <Link
                  to="/Contact"
                  className="mt-8 inline-block rounded border border-orange-600 bg-orange-500 px-12 py-3 text-sm font-medium text-white hover:bg-orange-600 hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
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
