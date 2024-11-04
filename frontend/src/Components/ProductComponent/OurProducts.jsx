import React, { useEffect, useState } from "react";
import productImage from "../../assets/mission.jpg";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct, getImageUrl } from "../../slices/productSlice";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";

const categories = {
  "Digital Podium": [],
  "Interactive ClassroomSolution": [
    "Interactive Flat Panel",
    "Led Touch Screen Interactive Board",
    "Interactive Whiteboard Smart Classroom Set",
    "Smart Class Speaker",
  ],
  "Writing Boards": [
    "Magnetic White Marker Writing Board",
    "Ceramic Green Chalk Writing Board",
    "E3 Ceramic Whiteboard 8X4FT",
    "Ceramic White Marker Writing Board",
  ],
  "Display Boards": [
    "Pin Up Notice Boards",
    "Welcome Board",
    "Exhibition Display Boards",
    "Lobby Information Board",
  ],
  "Classroom Furniture": [
    "Two Seating Classroom Desk",
    "SS Steel Desk Bench",
    "School Chair & Desks",
    "Single Seating Desk",
  ],
  "Stands For Display Board": ["Four Leg Display Stand", "Map Storage Stand"],
  "Combination Boards": [
    "Green Board with Notice/Pinup Board",
    "Whiteboard and Notice Board",
  ],
  "Glass Covered Notice Boards": [
    "Notice Board With Wooden Frame",
    "Notice Board with Sliding Door",
  ],
  "Projectors": [
    "Benq",
    "EPSON",
    "HITACHI",
    "SONY",
    "LG",
    "DELL",
    "PANASONIC",
    "INFOCUS",
  ],
  "Schedule Planning Boards": [
    "Weekly Planner",
    "Monthly Planner Display Board",
  ],
  "Sign Boards": ["Lactern Podium", "Fixograph Letter Boards"],
  "Projector Screens": ["Whiteboard Projector Screen"],
  "Sliding Glass Notice Boards": ["Notice Board With Glass Door"],
  "Kids Indoor Game Equipment": ["Indoor Slide"],
  "Display Board Accessories": ["Magnetic Letters"],
  "Digital Classroom Solutions": ["Digital Classroom Solutions"],
  "Outdoor Play Equipments": ["Multiplay system"],
  "Digital Projectors": ["BenQ MX808PST Digital Projector"],
  "Keyring Display Cabinets": ["Key cabinets"],
  "Outdoor Playground Equipment": ["Kids play equipment"],
  "Facilities": ["Digital Library"],
};

const CategorySection = () => {
  const dispatch = useDispatch();
  const { data: allProduct } = useSelector(
    (state) => state.product.getAllProduct
  );

  const [openCategory, setOpenCategory] = useState(null);
  const [Products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [showProductDetails, setShowProductDetails] = useState(false);

  useEffect(() => {
    if (allProduct) {
      filterProducts();
    }
  }, [allProduct, selectedCategory, selectedSubCategory]);

  const filterProducts = () => {
    let filteredProducts = allProduct;

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (selectedSubCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.subCategory === selectedSubCategory
      );
    }

    setProducts(filteredProducts);
  };

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
    setSelectedCategory(category);
    setSelectedSubCategory(null);
    setShowProductDetails(false);
  };

  const handleSubCategory = (subCategory) => {
    setShowProductDetails(false);
    setSelectedSubCategory(subCategory);
  };

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <div className="h-full">
      <div
        className="relative text-black py-8 px-8 font-sans bg-white sm:bg-cover sm:bg-center"
        style={{ backgroundImage: `url(${productImage})` }}>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className=" md:text-left w-96">
            <h2 className="text-2xl mb-4 font-bold text-white-500">
              Transform Your Learning Environment with Universe Educational
              Visuals
            </h2>
            <p className="text-base text-blue font-bold text-justify leading-5">Explore our range of educational tools, from interactive and smart boards to projectors and notice boards. Enhance your classroom experience with innovative solutions and engaging displays. Transform your teaching with our extensive offerings!</p>
          </div>

          <div className="w-fit">
            <Link to={"/Contact"}>
              <button
                type="button"
                className="bg-black text-white py-3 px-6 font-semibold rounded">
                Contact Us Today
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-black p-5">
        {/* <h2 className="text-3xl text-white font-bold text-center mt-10">
          Product Categories
        </h2> */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:sticky top-2 h-full w-full md:mr-10 bg-pink shadow-md">
            <div className="border-b border-green">
              <h2 className="px-4 py-2 bg-slate-800 ">
                <button
                  className={`flex justify-between w-full text-left text-md font-medium text-white`}
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedSubCategory(null);
                    setProducts(allProduct);
                  }}>
                  All Category
                </button>
              </h2>
            </div>
            {Object.keys(categories).map((category, index) => (
              <div className="border-b border-slate-700" key={index}>
                <h2 className="bg-slate-600 px-4 py-2">
                  <button
                    className={`flex justify-between w-full text-left text-md font-medium text-slate-300`}
                    onClick={() => toggleCategory(category)}>
                    {category}
                    {categories[category].length > 0 && (
                      <span
                        className={`transition-transform transform text-white-500 ${openCategory === category ? "rotate-90" : ""
                          }`}>
                        ➔
                      </span>
                    )}
                  </button>
                </h2>
                {categories[category].length > 0 && (
                  <div
                    className={`${openCategory === category ? "block" : "hidden"
                      }`}>
                    <div className="text-black bg-slate-300">
                      {categories[category].map((subCategory, subIndex) => (
                        <button
                          onClick={() => handleSubCategory(subCategory)}
                          key={subIndex}
                          className="text-md pl-10 pr-3 py-1 block text-slate-600 text-start ">
                          {subCategory}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="md:col-span-2 h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {Products?.length === 0 ? (
              <div className="text-center text-red-600">
                No products available.
              </div>
            ) : (
              <>
                {showProductDetails ? (
                  <div className="col-span-full">
                    <ProductDetails />
                  </div>
                ) : (
                  Products?.map((product, index) => {
                    return (
                      <ProductCard
                        key={index}
                        setShowProductDetails={setShowProductDetails}
                        product={product}
                      />
                    );
                  })
                )}
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default CategorySection;
