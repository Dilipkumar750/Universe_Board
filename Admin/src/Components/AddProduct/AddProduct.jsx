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

  const imageHandler = (event) => {
    const file = event.target.files[0];

    if (!file) {
      alert("No file selected.");
      return;
    }

  
    const allowedTypes = ["image/png", "image/jpg", "image/jpeg", "image/svg+xml"];
    if (!allowedTypes.includes(file.type)) {
      alert("Only PNG, JPG, JPEG, and SVG files are allowed.");
      return;
    }

    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      setImage(file);
    };
  };

  const addProductHandler = async () => {
    dispatch(addProduct({ productDetails, image }));
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;

    const alphanumericRegex = /^[a-zA-Z0-9\s]*$/;
    const descriptionRegex = /^[a-zA-Z0-9\s.,?]*$/;

    if (name === "description") {
      if (descriptionRegex.test(value)) {
        setProductDetails({ ...productDetails, [name]: value });
      } else {
        alert("Only letters, numbers, and basic punctuation are allowed in the description.");
      }
    } else {
      if (alphanumericRegex.test(value)) {
        setProductDetails({ ...productDetails, [name]: value });
      } else {
        alert("Only letters and numbers are allowed.");
      }
    }
  };

  const categories = {
    "Interactive ClassroomSolution": [
      "Interactive Flat Panel",
      "Led Touch Screen Interactive Board",
      "Interactive Whiteboard Smart Classroom Set",
      "Smart Class Speaker"
    ],
    "Writing Boards": [
      "Magnetic White Marker Writing Board",
      "Ceramic Green Chalk Writing Board",
      "E3 Ceramic Whiteboard 8X4FT",
      "Ceramic White Marker Writing Board"
    ],
    "Display Boards": [
      "Pin Up Notice Boards",
      "Welcome Board",
      "Exhibition Display Boards",
      "Lobby Information Board"
    ],
    "Classroom Furniture": [
      "Two Seating Classroom Desk",
      "SS Steel Desk Bench",
      "School Chair & Desks",
      "Single Seating Desk"
    ],
    "Stands For Display Board": [
      "Four Leg Display Stand",
      "Map Storage Stand"
    ],
    "Digital Podium": [],
    "Combination Boards": [
      "Green Board with Notice/Pinup Board",
      "Whiteboard and Notice Board"
    ],
    "Glass Covered Notice Boards": [
      "Notice Board With Wooden Frame",
      "Notice Board with Sliding Door"
    ],
    "Projectors": [
      "Benq",
      "EPSON",
      "HITACHI",
      "SONY",
      "LG",
      "DELL",
      "PANASONIC",
      "INFOCUS"
    ],
    "Schedule Planning Boards": [
      "Weekly Planner",
      "Monthly Planner Display Board"
    ],
    "Sign Boards": [
      "Lactern Podium",
      "Fixograph Letter Boards"
    ],
    "Projector Screens": [
      "Whiteboard Projector Screen"
    ],
    "Sliding Glass Notice Boards": [
      "Notice Board With Glass Door"
    ],
    "Kids Indoor Game Equipment": [
      "Indoor Slide"
    ],
    "Display Board Accessories": [
      "Magnetic Letters"
    ],
    "Digital Classroom Solutions": [
      "Digital Classroom Solutions"
    ],
    "Outdoor Play Equipments": [
      "Multiplay system"
    ],
    "Digital Projectors": [
      "BenQ MX808PST Digital Projector"
    ],
    "Keyring Display Cabinets": [
      "Key cabinets"
    ],
    "Outdoor Playground Equipment": [
      "Kids play equipment"
    ],
    "Facilities": [
      "Digital Library"
    ]
  };
  
  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>
          Product Title <span style={{ color: "red" }}>*</span>
        </p>
        <input
          type="text"
          name="title"
          value={productDetails.title}
          onChange={changeHandler}
          placeholder="Type here"
          required
        />
      </div>


      <div className="addproduct-itemfield">
        <p>Description <span style={{ color: "red" }}>*</span>
        </p>
        <textarea 
          name="description"
          value={productDetails.description}
          onChange={changeHandler}
          placeholder="Type here"
          style={{ height: "200px", width: "100%" }}
        />
      </div>

      <div
        className="addproduct-itemfield"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div style={{ marginRight: "20px", flex: "1" }}>
          <p style={{ marginBottom: "5px" }}>Product Category <span style={{ color: "red" }}>*</span> 
          </p>
          <select
            value={productDetails.category}
            name="category"
            className="add-product-selector"
            onChange={changeHandler}
            style={{ width: "100%", minWidth: "150px" }}
          >
            <option value="">Select Category</option>
            {Object.keys(categories).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

      
        <div style={{ flex: "1" }}>
          <p style={{ marginBottom: "5px" }}>Product SubCategory</p>
          <select
            value={productDetails.subCategory}
            name="subCategory"
            className="add-product-selector"
            onChange={changeHandler}
            style={{ width: "100%", minWidth: "150px" }}
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
      </div>
      <div className="addproduct-itemfield">
        <p>Upload Image <span style={{ color: "red" }}>*</span>
        </p>
        <label htmlFor="file-input">
          <img
            className="addproduct-thumbnail-img"
            src={!image ? upload_area : URL.createObjectURL(image)}
            alt="Upload area"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>

      <button
        className="addproduct-btn"
        onClick={addProductHandler} 
        disabled={isLoading}
      >
        {isLoading ? "Adding..." : "ADD"}
      </button>
    </div>
  );
};

export default AddProduct;
