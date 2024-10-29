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

  const categories = {
    "All Category": [],
    Forklift: [],
    "Amusement Equipment": [],
    "Other Machinery": [],
    "Medical Apparatus and Instruments": ["Mask machine"],
    "Engineering Machinery": [
      "Wood sawdust pellet heating fireplace",
      "Wood Pellet Mill",
      "Beach sand Cleaning Machine",
      "Brick machine",
      "Diesel Fan Heater",
      "Snow thrower",
      "Steel rebar cutting machine",
      "Rebar Bending Machine",
      "Stone crusher",
      "Forklift",
      "Lift Tables",
      "Hoisting machinery",
      "Loader machine",
      "Tracked transporter",
      "Truck crane",
      "Tricycle",
    ],
    "Food Machinery": [
      "Juicer",
      "Rice puffing machine",
      "Corn popper",
      "Popcorn Maker",
      "Sawmill",
      "Ice Machines",
      "Hot dogs egg baking Machine",
      "Donut machine",
      "Vegetable cutter",
      "Starch separator",
      "Ice cream machine",
      "Bread machine",
      "Oil press",
    ],
    "Electric Motorcycle": [],
    "Ranch Machinery": ["Sheep shears"],
    "Packaging Machine": [
      "Vacuum Packing Machines",
      "Small Sealing Machine",
      "Other packing machine",
    ],
    "Grain Processing Machinery": [],
    "Farm Machinery": [
      "Stump grinder",
      "Animal Feeders",
      "Plucker",
      "Egg Incubators",
      "Other Farm Machines",
    ],
    "Animal Husbandry Machinery": [],
    "Tools": [],
    "Agricultural Product Processing Machinery": [],
    "Garden Tool": [],
    "Cultivator": [],
    "Surface Drill": ["Excavator"],
    "Rubber V Belt and Timing Belts": [
      "Agricultural machinery Belt",
      "PK Belts",
      "Automotive timing Belt",
      "Industrial timing Belt",
      "Classical wrapped V belt",
      "Narrow wrapped V belt",
      "Multi Joint V common V belt",
      "Conveyer Belt",
      "Synchronous Pulley and Belt",
    ],
    "Farm Implements": [
      "Water Well Drilling Machine",
      "Walking tractor",
      "Tractor",
      "Cultivator",
      "Rice transplanter",
      "Mini mower",
      "Road snow sweeper",
      "Shellers",
      "Vegetable Seed Planter",
      "Fertilizer Spreaders",
      "Drum lawn Mower",
      "Other farm machine",
      "Balers",
      "Wheat corn seeder",
      "Rotary Tiller",
      "Subsoiler",
      "Front End Loader",
      "Potato seeder",
      "Tractor Trailer",
      "Disc Harrow",
      "Furrow Plough",
      "Harvester",
    ],
    Ungrouped: [],
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
     
      setImage(null);
    }
  }, [product]);

  const updateProductHandler = async () => {
    try {
      await dispatch(updateProduct({ productDetails, image }));
      navigate("/listproduct");
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  };

  if (loading) return <p>Loading product details...</p>;
  if (fetchError) return <p>Error loading product data: {fetchError}</p>;

  const existingImageUrl = getImageUrl(product?.image)

  return (
    <div className="addproduct">
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

      <div className="addproduct-itemfield">
        <p>Upload Image</p>

        <label htmlFor="file-input">
          <img
            className="addproduct-thumbnail-img"
            src={!image ? existingImageUrl: URL.createObjectURL(image)}
            alt=""
            style={{ width: "100px", height: "100px", objectFit: "cover", cursor: "pointer" }}
          />
        </label>

        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          
        />
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
