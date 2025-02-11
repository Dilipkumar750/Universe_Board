import { useEffect, useState } from "react";
import productImage from "../../assets/mission.jpg";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../../slices/productSlice";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";

const categories = {
  "Interactive Panels": [
    "65’ interactive Panel android",
    "65’ interactive panel android with Window",
    "75’ interactive Panel android",
    "75’ interactive panel android with Window",
    "86’ interactive Panel android",
    "86’ interactive panel android with Window",
    "98’ interactive Panel android",
    "98’ interactive panel android with Window",
  ],
  "Smart Class Setups": [
    "82 Interactive Board",
    "92 Interactive Board",
    "102 Interactive Board",
    "Smart class Speaker",
  ],
  "Writing Boards": [

    "Ceramic Green Board (Customized size)",
    "Magnetic Green Board (Customized size)",
    "Non Magnetic Green Board (Customized size)",
    "Ceramic White Board (Customized size)",
    "Magnetic White Board (Customized size)",
    "Non Magnetic White Board (Customized size)",
    "Green Board & White Board (Customized size)",
    "Green Board & Notice Board (Customized size)",
    "White Board & Notice Board (Customized size)",
    "Monthly & Weekly Planner Board (Customized size)",
    "Time Table & Data Entry Board (Customized size)",
  ],
  "Display Boards": [
    "Preshograph Board",
    "Grooved Board",
    "Lobby Information Board",
    "Exhibition Display Board",
    "Three Leg Stand",
    "Four Leg Stand",
    "Movable Stand",
    "Revolving Stand",
  ],
  "Classroom Furniture": [
    "SS Desk and Bench",
    "MS with Powder Coated Desk And Bench",
    "Wooden Top with MS Leg Desk And Bench",
  ],
  "Kindergarten Items": [],
  "Playground Items": [
    "Indoor",
    "Outdoor",
  ],
  "Laboratory Furniture": [],
  "Podiums": [
    "Digital Podium",
    "Wooden Podium",
  ],
  "Other Items": [],
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
    dispatch(getAllProduct());
  }, [dispatch]);

  useEffect(() => {
    filterProducts();
  }, [allProduct, selectedCategory, selectedSubCategory]);

  const filterProducts = () => {
    let filteredProducts = allProduct || [];

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
    setSelectedCategory(category);
    setSelectedSubCategory(null);
    setShowProductDetails(false);
  };

  const handleSubCategory = (subCategory) => {
    setSelectedSubCategory(subCategory);
    setShowProductDetails(false);
  };

  const handleCategoryHover = (category) => {
    setOpenCategory(category);
    setSelectedCategory(category);
    setSelectedSubCategory(null);
    setShowProductDetails(false);
  };

  const handleMouseLeaveCategory = () => {
    setOpenCategory(null);
  };

  return (
    <div className="h-full">
      <div
        className="relative text-black py-8 px-8 font-sans bg-white sm:bg-cover sm:bg-center"
        style={{ backgroundImage: `url(${productImage})` }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:text-left w-96">
            <h2 className="text-2xl mb-4 font-bold text-blue-700">
              Transform Your Learning Environment with Universe Visuals
            </h2>
            <p className="text-base text-red font-bold text-justify leading-5">
              Explore our range of educational tools, from interactive and
              smart boards to projectors and notice boards. Enhance your
              classroom experience with innovative solutions and captivating
              displays. Elevate your teaching with our extensive offerings!
            </p>
          </div>

          <div className="w-fit">
            <Link to={"/Contact"}>
              <button
                type="button"
                className="bg-black text-white py-3 px-6 font-semibold rounded"
              >
                Contact Us Today
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:sticky top-1 h-full w-full md:mr-8 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 rounded-lg shadow-lg p-6">
            <div className="border-gray-700 mb-2">
              <h2 className="px-4 py-3 bg-slate-800 rounded-md">
                <button
                  className="flex justify-between w-full text-left text-lg font-semibold text-white hover:text-pink-200 transition duration-200 ease-in-out"
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedSubCategory(null);x
                    setProducts(allProduct);
                  }}
                >
                  All Categories
                </button>
              </h2>
            </div>

            {Object.keys(categories).map((category, index) => (
              <div
                className="border-gray-700 mb-2"
                key={index}
                onMouseEnter={() => handleCategoryHover(category)}
                onMouseLeave={handleMouseLeaveCategory}
              >
                <h2 className="bg-white px-4 py-3 rounded-xl">
                  <button
                    onClick={() => toggleCategory(category)}
                    className={`flex justify-between w-full text-left text-md font-medium transition duration-200 ease-in-out ${selectedCategory === category
                      ? "text-blue-500"
                      : "text-black"
                      }`}
                  >
                    {category}
                    {categories[category].length > 0 && (
                      <span
                        className={`transition-transform transform ${openCategory === category ? "rotate-90" : ""
                          }`}
                      >
                        ➔
                      </span>
                    )}
                  </button>
                </h2>

                {categories[category].length > 0 && (
                  <div
                    className={`${openCategory === category ? "block" : "hidden"
                      } bg-white ml-16 rounded-md mt-2`}
                  >
                    <div className="text-black">
                      {categories[category].map((subCategory, subIndex) => (
                        <button
                          onClick={() => handleSubCategory(subCategory)}
                          key={subIndex}
                          className={`text-sm pl-8 pr-3 py-2 block transition duration-200 ease-in-out ${selectedSubCategory === subCategory
                            ? "text-blue-500"
                            : "text-black"
                            }`}
                        >
                          {subCategory}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Product Grid */}
          <div className="md:col-span-2 h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Products?.length === 0 ? (
              <div className="text-center text-red-500 font-semibold text-lg">
                {selectedSubCategory
                  ? `No products found for "${selectedSubCategory}"`
                  : `No products found for "${selectedCategory}"`}
              </div>
            ) : (
              <>
                {showProductDetails ? (
                  <div className="col-span-full">
                    <ProductDetails />
                  </div>
                ) : (
                  Products?.map((product, index) => (
                    <ProductCard
                      key={index}
                      setShowProductDetails={setShowProductDetails}
                      product={product}
                    />
                  ))
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