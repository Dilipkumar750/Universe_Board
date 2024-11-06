import agri from '../../assets/agri.jpg';
import amusement from '../../assets/amusement (1).jpeg';
import graining from '../../assets/graining.jpeg';
import experts from '../../assets/experts.jpg';
import experts1 from '../../assets/pordium.jpg';
import { Link } from 'react-router-dom'
const MainProducts = () => {
  const products = [
    { image: graining, title: 'Projector', description: 'We Are Selling Top Brand Projectors.Like, Benq, Epson, Hitachi, Sony, Lg,Dell, Panasonic, Infocus' },
    { image: agri, title: 'Whiteboard Projector Screen', description: 'Elevate your presentations with our Projector Screen with Whiteboard, ideal for education, seminars, and conferences.' },
    { image: amusement, title: 'Kids indoor game equipment', description: 'Prominent & Leading Manufacturer from Tiruchirappalli, we offer indoor slide.' },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-400 py-5">
   
      <h2 className="text-4xl font-bold mb-8 text-red-500">Major Products</h2>

     
      <div className="grid md:grid-cols-3 gap-6 b" data-aos="fade-down">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl w-80 border border-red-500"
          >
            <div className="p-4 text-center h-32">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{product.description}</p>
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
                <button className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-600">
                  Chat Now..
                </button>
              </a>

            </div>
          </div>
        ))}
      </div>
      <div className=" font-[sans-serif] relative mx-auto rounded overflow-hidden mt-4 w-full bg-gray-300">

        <div className="flex flex-col sm:flex-row items-center gap-10 py-10 border-y-8 border-red-400">


          <div className="flex justify-center sm:justify-start w-full sm:w-auto" data-aos="fade-right">
            <img src={experts} className="h-64 w-64 rounded-3xl object-cover border-4 border-white" alt="machinery image" />
          </div>
          <div className="text-center px-6 sm:flex-1" data-aos="fade-up">
            <h3 className="font-extrabold text-5xl text-black leading-tight">
            Universal Boards
            </h3>
            <h6 className="text-2xl text-black mt-2">Quality You Can Trust</h6>
            <p className="text-black text-base leading-relaxed mt-4">Providing high-quality school equipment crafted for durability and functionality. From boards and chairs to podiums and kids play area items, our products are designed to support educational excellence and enhance learning environments.</p>

            <Link to={"/Contact"}>
              <button type="button" className="bg-gradient-to-r from-white to-white hover:bg-white-500 text-black tracking-wide font-semibold text-sm py-3 px-6 rounded-lg w-max mt-8">
                Explore Now
              </button>
            </Link>
          </div>
          <div className="flex justify-center sm:justify-end w-full sm:w-auto" data-aos="fade-left">
            <img src={experts1} className="h-64 w-64 rounded-3xl object-cover border-4 border-white" alt="machinery image" />
          </div>

        </div>
      </div>
    </div>



  );
};

export default MainProducts;
