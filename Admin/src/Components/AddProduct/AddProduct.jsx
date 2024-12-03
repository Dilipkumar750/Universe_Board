import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../Assets/upload_area.svg";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../slices/productSlice";

const AddProduct = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.product.addProduct);

  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    title: "",
    description: "",
    category: "",
    subCategory: "",
  });
  const [details, setDetails] = useState([{ name: "", value: "" }]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ["image/png", "image/jpg", "image/jpeg", "image/svg+xml"];
      if (allowedTypes.includes(file.type)) {
        setImage(file);
      } else {
        alert("Only PNG, JPG, JPEG, and SVG files are allowed.");
      }
    }
  };

  const handleAddDetail = () => {
    setDetails([...details, { name: "", value: "" }]);
  };

  const handleDetailChange = (index, event) => {
    const values = [...details];
    values[index][event.target.name] = event.target.value;
    setDetails(values);
  };

  const handleDeleteDetail = (index) => {
    const values = [...details];
    values.splice(index, 1);
    setDetails(values);
  };
  const handleSubmit = () => {
    dispatch(addProduct({ productDetails, image, details }));
  };
  

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
  

  return (
    <div className="addproduct">
      <h1>Add Product</h1>

      <div className="addproduct-itemfield">
        <label htmlFor="title">Product Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={productDetails.title}
          onChange={handleInputChange}
        />
      </div>

      <div className="addproduct-itemfield">
        <label htmlFor="description">Product Description</label>
        <textarea
          id="description"
          name="description"
          value={productDetails.description}
          onChange={handleInputChange}
        />
      </div>

      <div className="addproduct-itemfield">
        <label htmlFor="category">Product Category</label>
        <select
          id="category"
          name="category"
          value={productDetails.category}
          onChange={handleInputChange}
        >
          <option value="">Select Category</option>
          {Object.keys(categories).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="addproduct-itemfield">
        <label htmlFor="subCategory">Sub Category</label>
        <select
          id="subCategory"
          name="subCategory"
          value={productDetails.subCategory}
          onChange={handleInputChange}
          disabled={!productDetails.category}
        >
          <option value="">Select SubCategory</option>
          {categories[productDetails.category]?.map((subcat) => (
            <option key={subcat} value={subcat}>
              {subcat}
            </option>
          ))}
        </select>
      </div>

      {/* Product Details Section */}
      <div className="addproduct-itemfield">
        <label>Product Details</label>
        
        {details.map((detail, index) => (
          <div key={index} className="d-flex mb-2">
            <div className="flex-1">{index + 1}</div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="flex-1 border border-gray-300 rounded p-2"
              value={detail.name}
              onChange={(e) => handleDetailChange(index, e)}
            />
            <input
              type="text"
              name="value"
              placeholder="Value"
              className="flex-1 border border-gray-300 rounded p-2"
              value={detail.value}
              onChange={(e) => handleDetailChange(index, e)}
            />
            <button
              type="button"
              onClick={handleAddDetail}
              className="text-red-500 font-bold"
            >
              +
            </button>
            <button
              type="button"
              onClick={() => handleDeleteDetail(index)}
              className="text-red-500" // Style for delete button
            >
              -
            </button>
          </div>
        ))}
      </div>

      {/* Image Upload Section */}
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">Upload Image</label>
        <label htmlFor="file-input" className="cursor-pointer">
          <img
            className="addproduct-thumbnail-img"
            src={!image ? upload_area : URL.createObjectURL(image)}
            alt="Upload area"
          />
        </label>
        <input id="file-input" type="file" onChange={handleFileChange} hidden />
        {image && <p>{image.name}</p>}
      </div>

      <button
        onClick={handleSubmit}
        className="addproduct-btn"
        disabled={isLoading}
      >
        {isLoading ? "Adding..." : "Add Product"}
      </button>
    </div>



  );
};

export default AddProduct;
