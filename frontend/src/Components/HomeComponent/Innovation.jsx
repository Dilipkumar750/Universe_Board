import { Link } from "react-router-dom";
import industry from "../../assets/industry.jpg";
import { useState, useEffect } from "react";

const Innovation = () => {
  const [sales, setSales] = useState(0);
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [products, setProducts] = useState(0);

  useEffect(() => {
    // Counter for sales
    const salesTarget = 400;
    const salesInterval = setInterval(() => {
      setSales((prevSales) => {
        if (prevSales >= salesTarget) {
          clearInterval(salesInterval);
          return prevSales;
        }
        return prevSales + 50;
      });
    }, 100);

    // Counter for happy customers
    const happyCustomersTarget = 700;
    const happyCustomersInterval = setInterval(() => {
      setHappyCustomers((prevCustomers) => {
        if (prevCustomers >= happyCustomersTarget) {
          clearInterval(happyCustomersInterval);
          return prevCustomers;
        }
        return prevCustomers + 35;
      });
    }, 100);

    // Counter for products
    const productsTarget = 149;
    const productsInterval = setInterval(() => {
      setProducts((prevProducts) => {
        if (prevProducts >= productsTarget) {
          clearInterval(productsInterval);
          return prevProducts;
        }
        return prevProducts + 10;
      });
    }, 100);

    // Cleanup intervals on unmount
    return () => {
      clearInterval(salesInterval);
      clearInterval(happyCustomersInterval);
      clearInterval(productsInterval);
    };
  }, []);

  return (
    <section>
      <div className="relative font-inter antialiased">
        <main className="relative flex flex-col justify-center bg-slate-200 overflow-hidden mt-10">
          <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
            <section className="grid gap-12 md:grid-cols-3 md:gap-16">
              <article>
                <h2>
                  <span className="counter flex tabular-nums text-slate-900 text-5xl font-extrabold mb-2">
                    {sales}+
                  </span>
                  <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">
                    Sales
                  </span>
                </h2>
                <p className="text-sm text-slate-500">
                  We have successfully completed over {sales} sales, showcasing our commitment to quality and service.
                </p>
              </article>

              <article>
                <h2>
                  <span className="counter flex tabular-nums text-slate-900 text-5xl font-extrabold mb-2">
                    {happyCustomers}+
                  </span>
                  <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">
                    Happy Customers
                  </span>
                </h2>
                <p className="text-sm text-slate-500">
                  Join our community of over {happyCustomers} happy customers who love our products and services.
                </p>
              </article>

              <article>
                <h2>
                  <span className="counter flex tabular-nums text-slate-900 text-5xl font-extrabold mb-2">
                    {products}+
                  </span>
                  <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">
                    Products
                  </span>
                </h2>
                <p className="text-sm text-slate-500">
                  Explore our wide range of over {products} products tailored to meet your needs.
                </p>
              </article>
            </section>
          </div>
        </main>

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

            <div className="relative flex items-center bg-green-300 md:rounded-r-3xl">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-green-300 md:rounded-l-3xl"></span>

              <div className="p-5 sm:p-16 lg:p-24" data-aos="fade-left">
                <h2 className="text-2xl font-bold sm:text-3xl text-black">
                  Our Educational Tools in Action: Real Success Stories
                </h2>
                <p className="mt-4 text-black text-justify">
                  At Universe Educational Visuals, innovation drives everything we create. We offer a wide range of products, including smart boards, projectors, and various writing boards, both ceramic and magnetic, to enhance your educational experience.
                  <br />
                  Our dedicated team continually develops tools such as display boards, notice boards with sliding glass doors, and press graph boards, ensuring they meet the changing needs of educators and students.
                </p>

                <div data-aos="zoom-in" className="flex justify-start">
                  <Link to="/Contact">
                    <button
                      className="font-sans mt-10 flex justify-center gap-2 items-center shadow-xl text-lg text-red-500 bg-red backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
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
      </div>
    </section>
  );
};

export default Innovation;
