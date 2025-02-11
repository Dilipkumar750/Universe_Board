import React, { useState } from 'react';
import { getImageUrl, getProductById } from '../../slices/productSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function ProductCard({ product }) {
  const imageUrl = getImageUrl(product.image);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleViewClick = () => {
    navigate(`/product/${product._id}`);
    dispatch(getProductById({ id: product._id }));
  };

  const handleMoreClick = () => {
    handleViewClick();
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
        <div className="text-center text-white flex-grow">
          <h3 className="text-lg font-semibold text-white">{product.title}</h3>
          <p
            className={`text-sm text-black-200 mt-2 ${
              isExpanded ? '' : 'line-clamp-3'
            }`}
          >
            {product.description}
          </p>
          {!isExpanded && product.description.length > 100 && ( // Adjust threshold for the "More" button
            <button
              onClick={handleMoreClick}
              className="mt-3 px-4 py-1 text-black rounded-full shadow-lg text-sm font-bold uppercase tracking-wide transition-all duration-300"
            >
              Read More..
            </button>
          )}
        </div>
        <div className="flex justify-center gap-2">
          <button
            onClick={handleViewClick}
            className="text-black font-medium px-4 py-2 rounded-lg bg-[#98CE16]"
          >
            View
          </button>
          <Link to="/Contact">
            <button className="text-white px-4 py-2 rounded-lg bg-blue-600">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
