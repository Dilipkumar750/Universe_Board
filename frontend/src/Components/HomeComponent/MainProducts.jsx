import React from 'react';
import agri from '../../assets/agri.jpg';
import amusement from '../../assets/amusement.jpeg';
import graining from '../../assets/graining.jpeg';
import forklift from '../../assets/forklift 1.jpg';
import experts from '../../assets/experts.png';
import experts1 from '../../assets/experts 1.jpg';
import { Link } from 'react-router-dom'
const MainProducts = () => {
  const products = [
    { image: graining, title: 'Graining Processing Machine', description: 'Efficient graining process for higher output.' },
    { image: agri, title: 'Agricultural Machinery', description: 'Innovative  for advanced farming.' },
    { image: amusement, title: 'Amusement Rides', description: 'High-quality, safe amusement rides.' },
    { image: forklift, title: 'Forklift Machines', description: 'Heavy-duty forklifts for industrial use.' },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-black">
   
      <h2 className="text-4xl font-bold mb-8 text-orange-500">Major Products</h2>

     
      <div className="flex flex-wrap justify-center gap-6 b" data-aos="fade-down">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl w-80 border border-orange-500"
          >
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-600 mt-2 w-full">{product.description}</p>
            </div>
            <div className="overflow-hidden rounded-t-xl h-64 group p-3 rounded-sm">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                data-aos="fade-down"
              />
            </div>

            <div className="flex justify-center p-4">

              <a href='https://wa.me/8048955493'>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                  Chat Now..
                </button>
              </a>

            </div>
          </div>
        ))}
      </div>
      <div class=" font-[sans-serif] relative mx-auto rounded overflow-hidden mt-4 w-full bg-black">

        <div class="flex flex-col sm:flex-row items-center gap-10 py-10 border-y-8 border-orange-400">


          <div class="flex justify-center sm:justify-start w-full sm:w-auto" data-aos="fade-right">
            <img src={experts} class="h-64 w-64 rounded-full object-cover border-4 border-white" alt="machinery image" />
          </div>


          <div class="text-center px-6 sm:flex-1" data-aos="fade-up">
            <h3 class="font-extrabold text-5xl text-orange-500 leading-tight">
              <span class="text-white">Precision</span> Machinery Manufacturing
            </h3>
            <h6 class="text-2xl text-white mt-2">Quality You Can Trust</h6>
            <p class="text-white text-base leading-relaxed mt-4">
              Delivering high-performance machinery built with precision engineering. Our manufacturing process ensures durability, efficiency, and innovative design for industrial excellence.
            </p>

            <Link to={"/Contact"}>
              <button type="button" class="bg-gradient-to-r from-white to-white hover:bg-white-500 text-black tracking-wide font-semibold text-sm py-3 px-6 rounded-lg w-max mt-8">
                Explore Our Machines
              </button>
            </Link>
          </div>
          <div class="flex justify-center sm:justify-end w-full sm:w-auto" data-aos="fade-left">
            <img src={experts1} class="h-64 w-64 rounded-full object-cover border-4 border-white" alt="machinery image" />
          </div>

        </div>
      </div>


    </div>



  );
};

export default MainProducts;
