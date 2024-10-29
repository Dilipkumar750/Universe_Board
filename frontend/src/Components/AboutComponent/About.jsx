import React from 'react';
import about from '../../assets/Exhibition Display Boards.png';
import imageOne from '../../assets/greenchalk borad.png';
import imageTwo from '../../assets/kinds- school-desk.png';
import imageThree from '../../assets/projector.png';
import imageFour from '../../assets/single seating desk.png';
import vision from '../../assets/vision.jpg'
import mission from '../../assets/mission.jpg'
import selling from '../../assets/selling.jpg'
import { Link } from 'react-router-dom';

// Example products array with correct image references
const products = [
  { image: imageOne },
  { image: imageTwo },
  { image: imageThree },
  { image: imageFour },
];

const About = () => {
  return (
    <div className="font-sans">
      <div className="grid lg:grid-cols-2 items-center lg:gap-y-6 bg-black">
        <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-4" data-aos="fade-right">
          <h2 className="text-white lg:text-5xl text-4xl font-bold lg:!leading-[56px] items-center text-center">Our Company</h2>
          <p className="text-white mt-6 text-base leading-relaxed justify-center text-justify">
            We excel in sourcing products from China, Taiwan, India, and Indonesia. Our team guides you through every step—from obtaining quotes and evaluating factories to managing the complexities of manufacturing and shipping. We ensure your goods arrive on time, at the best price, quality, and lead time.
          </p>
          <br />
          <p className="text-white mt-4 text-base leading-relaxed text-justify">
            Gravity Global Exports Sdn. Bhd. was incorporated on November 11, 2021, in Malaysia under the name Gravity Global Exports Sdn. Bhd., with the<span className='text-black font-bold'> registration number 202101037574 (1437874-D).</span> The company specializes in online retail, wholesales a variety of goods without a specific focus, and engages in non-specialized retail sales. Gravity Global Exports Sdn. Bhd. is a private limited company that has been operating for three years.
          </p>
          <Link to={"/Contact"}>
            <button type="button" className="bg-black border-2 mt-12 text-white font-bold text-sm rounded-xl px-6 py-2.5 item-center">Get Started</button>
          </Link>      
            </div>

        <div className="lg:h-[480px] flex items-center" data-aos="fade-left">
          <img src={about} className="w-full h-full  rounded-3xl p-2" alt="About Our Company" />
        </div>
      </div>

      <div className="flex flex-col bg-black items-center mt-5 mb-5 p-4">
       
        <h1 className='text-3xl font-bold mb-4 text-center text-orange-500'>Our Famous Products</h1>
        
        <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up">
          {products.map((product, index) => (
            <div
              key={index}
              className="shadow-md rounded-xl w-full sm:w-80 border border-orange-500"
            >
              <div className="overflow-hidden rounded-t-xl h-64 group p-3 rounded-sm">
                <img
                  src={product.image}
                  alt={`Product ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className='py-8 bg-gray-300'

      >
        <h1 className='text-3xl font-bold mb-4 text-center text-orange-500'>Project Management</h1>
        <p className='w-full sm:w-1/2 mx-auto text-center'>
          Our Project Management team ensures seamless coordination and efficient execution of projects from start to finish.
          We prioritize clear communication, effective resource allocation, and timely delivery to meet client expectations.
          With a focus on innovation and quality, we drive successful project outcomes. Our dedicated team works closely
          with clients to achieve their goals on time and within budget.
        </p> 
      </div>
      <div className='bg-black'>
      <div className="mt-8 max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-8">
         
          <div className="lg:w-3/4 p-4 lg:text-left text-center" data-aos="fade-right">
            <h1 className="text-3xl font-bold mb-4 text-orange-500">Vision</h1>
            <p className='text-xl text-justify text-white'>
              Our vision is to be a global leader in delivering innovative and sustainable solutions. We aim to empower businesses to achieve excellence while driving positive change worldwide, creating a lasting impact for future generations.
            </p>
          </div>
         
          <div className="lg:w-1/2 p-4 flex justify-center">
            <img src={vision} alt="Vision Image" className="w-52 h-52 object-cover rounded-full" data-aos="fade-left" />
          </div>
        </div>

      
        <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-between mb-8">
          
          <div className="lg:w-3/4 p-4 lg:text-right text-center" data-aos="fade-left">
            <h1 className="text-3xl font-bold mb-4 text-orange-500">Mission</h1>
            <p className='text-xl text-justify text-white'>
              Our mission is to provide top-quality services and products through cutting-edge technology, expert collaboration, and customer-centric approaches. We aim to build lasting partnerships, enhance global connectivity, and contribute to sustainable growth for our clients and communities.
            </p>
          </div>
          
          <div className="lg:w-1/2 p-4 flex justify-center" data-aos="fade-right">
            <img src={mission} alt="Mission Image" className="w-52 h-52 object-cover rounded-full" data-aos="fade-right" />
          </div>
        </div>

      
        <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-8">
         
          <div className="lg:w-3/4 p-4 lg:text-left text-center" data-aos="fade-right">
            <h1 className="text-3xl font-bold mb-4 text-orange-500">Selling</h1>
            <p className='text-xl text-justify text-white'>
              We specialize in sourcing and customizing a wide range of products, including machinery, spare parts, and various online categories, tailored to meet customer requirements. Our expertise spans imports from China, India, Taiwan, and Thailand. We ensure high-quality products that align with your specifications. Let us handle your sourcing needs with precision and reliability.
            </p>
          </div>
         
          <div className="lg:w-1/2 p-4 flex justify-center">
            <img src={selling} alt="Selling Image" className="w-52 h-52 object-cover rounded-full" data-aos="fade-left" />
          </div>
        </div>
      </div>
      </div>




    </div>
  );
};

export default About;
