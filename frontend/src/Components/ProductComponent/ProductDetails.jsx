import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductById, getImageUrl } from "../../slices/productSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: product, loading, error } = useSelector((state) => state.product.getProductById);

  useEffect(() => {
    if (id) {
      dispatch(getProductById({ id })).then(() => {
      });
    }
  }, [dispatch, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error fetching product:", error);
    return <div className="text-center text-red-500">Error: {error.message}</div>;
  }

  if (!product?.data || !product?.data?._id) {
    return <div className="text-center text-red-500">Product not found.</div>;
  }

  const imageUrl = getImageUrl(product?.data?.image);

  return (
    <div className="container bg-white p-4 my-4 rounded relative">
      <h1 className="text-3xl font-bold text-[#003366] mb-4 text-center">Details of {product?.data?.title}</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="flex justify-center">
          <img
            src={imageUrl}
            alt={product?.data?.title}
            className="max-w-full h-auto rounded"
          />
        </div>
        <div className="max-w-2xl shadow overflow-hidden md:col-span-2 p-4">
          <dl>
            <div className="grid grid-cols-3 gap-4 mb-2">
              <dt className="text-sm font-medium text-black">Category</dt>
              <dd className="text-sm text-black col-span-2">{product?.data?.category}</dd>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-2">
              <dt className="text-sm font-medium text-black">Subcategory</dt>
              <dd className="text-sm text-black col-span-2">{product?.data?.subCategory}</dd>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-2">
              <dt className="text-sm font-medium text-black">Details:</dt>
              <dd className="text-sm text-black col-span-2">
                {product?.data?.details && product?.data?.details.length > 0 ? (
                  <table className="min-w-full border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Detail Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product?.data?.details.map((detail) => (
                        <tr key={detail._id} className="bg-white">
                          <td className="border border-gray-300 px-4 py-2">
                            <strong>{detail.name}</strong>
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {detail.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>No details available</p>
                )}
              </dd>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-2">
              <dt className="text-sm font-medium text-black">Description</dt>
              <dd className="text-sm text-black col-span-2">
                {product?.data?.description || "No description available"}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="flex justify-center mb-4 mt-4">
        <button
          className="bg-slate-700 text-slate-300 py-2 px-3 rounded-md me-2"
          onClick={() => navigate(-1)}
        >
         ← Back 
        </button>
        <Link to="/Contact">
          <button className="bg-green-500 text-white py-2 px-3 rounded-md">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
