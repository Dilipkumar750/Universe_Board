import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTestimonial, getAllTestimonials } from '../../slices/testimonialSlice';
import { Link } from 'react-router-dom';

const ListTestimonials = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { data, error } = useSelector((state) => state.testimonial.getAllTestimonials);
  const { data: deleteData,error:errorData } = useSelector((state) => state.testimonial.deleteTestimonial);
  

  const removeTestimonial = (id) => {
    dispatch(deleteTestimonial({ id }));
  };

  useEffect(() => {
    dispatch(getAllTestimonials());
  }, [dispatch, deleteData]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data ? data.slice(indexOfFirstItem, indexOfLastItem) : [];

  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;
console.log(deleteData,errorData)
  return (
    <div className="container bg-white p-4 my-4 rounded">
      <h1 className="display-6 mb-3">Testimonials List</h1>
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Title</th>
            <th scope="col">Text</th>
            <th scope="col">Rating</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((testimonial) => (
            <tr key={testimonial._id}>
              <td>{testimonial.name}</td>
              <td>{testimonial.title}</td>
              <td>{testimonial.text}</td>
              <td>{testimonial.rating}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger btn-sm me-2"
                  onClick={() => removeTestimonial(testimonial._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
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

export default ListTestimonials;
