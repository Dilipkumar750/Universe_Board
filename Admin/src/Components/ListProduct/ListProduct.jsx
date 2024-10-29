import React, { useEffect, useState } from "react";
import cross_icon from "../Assets/cross_icon.png";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteProduct,
  getAllProduct,
  getImageUrl,
} from "../../slices/productSlice";
import { Link } from "react-router-dom";

const ListProduct = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { data, error } = useSelector((state) => state.product.getAllProduct);
  const { data: deleteData } = useSelector(
    (state) => state.product.deleteProduct
  );

  const removeProduct = (id) => {
    dispatch(deleteProduct({ id }));
  };

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch, deleteData]);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data ? data.slice(indexOfFirstItem, indexOfLastItem) : [];


  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;

  return (
    <div className="container bg-white p-4 my-4 rounded">
      <h1 className="display-6 mb-3">All Products List</h1>
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Subcategory</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((e) => {
            const imageUrl = getImageUrl(e.image);
            return (
              <tr key={e._id}>
                <td>
                  <img
                    className="img-fluid rounded"
                    src={imageUrl}
                    alt={e.title}
                    style={{ height: "50px", width: "auto" }}
                  />
                </td>
                <td>{e.title}</td>
                <td>{e.category}</td>
                <td>{e.subCategory}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm me-2"
                    onClick={() => removeProduct(e._id)}
                  >
                    Delete
                  </button>
                  <Link to={`/edit/${e._id}`}>
                    <button type="button" className="btn btn-primary btn-sm">
                      Edit
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

    
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ListProduct;
