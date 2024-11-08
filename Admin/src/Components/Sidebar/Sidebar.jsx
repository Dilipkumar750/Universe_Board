import React from 'react';
import './Sidebar.css';
import add_product_icon from '../Assets/Product_Cart.png';
import list_product_icon from '../Assets/Product_list_icon.svg';
import { Link } from 'react-router-dom';
import sideimage from "../../Components/Assets/swiper8.png";
import star from "../../Components/Assets/star.png";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/home' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={add_product_icon} alt="Add Product" style={{ width: '50px', height: '50px' }} />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to='/home/listproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={list_product_icon} alt="Product List" style={{ width: '50px', height: '50px' }} />
          <p>Product List</p>
        </div>
      </Link>
      <Link to='/home/Testimonials' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={star} alt="Our Testimonials" style={{ width: '50px', height: '50px' }} />
          <p>Our Testimonials</p>
        </div>
      </Link>
      <Link to='/home/ListTestimonials' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={star} alt="Our Testimonials" style={{ width: '50px', height: '50px' }} />
          <p>List Testimonials</p>
        </div>
      </Link>
      <img className='sidebar-background' src={sideimage} alt="Sidebar Background Image" />
    </div>
  );
}

export default Sidebar;
