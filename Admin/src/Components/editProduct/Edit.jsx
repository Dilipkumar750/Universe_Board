import React, { useEffect, useState } from "react";
import "../AddProduct/AddProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { getImageUrl, getOneProduct, updateProduct } from "../../slices/productSlice";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading: isUpdating } = useSelector((state) => state.product.updateProduct);
  const { data: product, error: fetchError, loading } = useSelector((state) => state.product.getOneProduct);

  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    _id: "",
    title: "",
    description: "",
    image: "",
    category: "",
    subCategory: "",
  });
  const [details, setDetails] = useState([{ name: "", value: "" }]); // New state for product details


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

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    dispatch(getOneProduct({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      setProductDetails(product);
      setDetails(product.details || [{ name: "", value: "" }]); // Initialize details from product
      setImage(null);
    }
  }, [product]);

  const updateProductHandler = async () => {
    try {
      await dispatch(updateProduct({ productDetails, image, details })); // Include details in update
      navigate("/listproduct");
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  };

  const handleDetailChange = (index, event) => {
    const { name, value } = event.target;
    setDetails((prevDetails) => {
      const updatedDetails = [...prevDetails]; // Create a shallow copy of the details array
      updatedDetails[index] = { ...updatedDetails[index], [name]: value }; // Create a new object for the specific detail
      return updatedDetails; // Return the updated array
    });
  };

  const handleAddDetail = () => {
    setDetails([...details, { name: "", value: "" }]);
  };

  const handleDeleteDetail = (index) => {
    const values = [...details];
    values.splice(index, 1);
    setDetails(values);
  };

  if (loading) return <p>Loading product details...</p>;
  if (fetchError) return <p>Error loading product data: {fetchError}</p>;

  const existingImageUrl = getImageUrl(product?.image);

  return (
    <div className="addproduct">
      {/* Product title, description, category, and subcategory inputs */}
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input
          type="text"
          name="title"
          value={productDetails.title}
          onChange={changeHandler}
          placeholder="Type here"
        />
      </div>

      <div className="addproduct-itemfield">
        <p>Description</p>
        <textarea
          name="description"
          value={productDetails.description}
          onChange={changeHandler}
          placeholder="Type here"
          className="description-textarea"
          style={{ height: "200px", width: "100%" }}
        />
      </div>

      <div className="addproduct-itemfield" style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ marginRight: "20px", flex: "1" }}>
          <p style={{ marginBottom: "5px" }}>Product Category</p>
          <select
            value={productDetails.category}
            name="category"
            className="add-product-selector"
            onChange={changeHandler}
            style={{ width: "100%", minWidth: "150px" }}>
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
            disabled={!productDetails.category}>
            <option value="">Select SubCategory</option>
            {categories[productDetails.category]?.map((subcat) => (
              <option key={subcat} value={subcat}>
                {subcat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="addproduct-itemfield">
        <label>Product Details</label>
        {details.map((detail, index) => (
          <div key={index} className="d-flex mb-2">
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
              className="text-blue-500 font-bold"
            >
              +
            </button>
            <button
              type="button"
              onClick={() => handleDeleteDetail(index)}
              className="text-red-500"
            >
              -
            </button>
          </div>
        ))}
      </div>

      {/* Image Upload Section */}
      <div className="addproduct-itemfield">
        <p>Upload Image</p>
        <label htmlFor="file-input">
          <img
            className="addproduct-thumbnail-img"
            src={!image ? existingImageUrl : URL.createObjectURL(image)}
            alt=""
            style={{ width: "100px", height: "100px", objectFit: "cover", cursor: "pointer" }}
          />
        </label>
        <input onChange={imageHandler} type="file" name="image" id="file-input" />
      </div>

      <button
        className="addproduct-btn"
        onClick={updateProductHandler}
        disabled={isUpdating}>
        {isUpdating ? "Updating..." : "Update"}
      </button>
    </div>
  );
};

export default Edit;
