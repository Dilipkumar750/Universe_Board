import React from 'react';
import { getImageUrl, getProductById } from '../../slices/productSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function ProductCard({ product }) {
  const imageUrl = getImageUrl(product.image);
  const navigate = useNavigate(); // Use the useNavigate hook from React Router
  const dispatch = useDispatch()
  const handleViewClick = () => {
    // Navigate to the product details page with the product ID
    navigate(`/product/${product._id}`);
    dispatch(getProductById({ id: product._id }))
    // console.log("idddd", product._id)
  };

  return (
    <div className="bg-white shadow-sm rounded-xl w-full md:w-60 border border-black-500 overflow-hidden transition-transform transform hover:scale-105">
      <div className="overflow-hidden rounded-t-xl h-64 group">
        <img
          src={imageUrl}
          alt={product.title}
          className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col justify-between h-60 p-4 bg-gray-500">
        <div className="text-center flex-grow">
          <h3 className="text-lg font-semibold text-white">{product.title}</h3>
          <p className="text-sm text-gray-200 mt-2">{product.description}</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleViewClick} // Call handleViewClick on button click
            className="text-white px-4 py-2 rounded-lg bg-gray-600"
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
