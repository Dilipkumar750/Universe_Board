import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import navlogo from '../Assets/nav-logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm mb-1 bg-gradient-to-l from-blue-800 via-blue-200 to-blue-800" style={{ maxHeight: '100px' }}>
      <div className="container d-flex justify-content-center align-items-center">
        <a href="/" className="navbar-brand d-flex align-items-center">
          <img src={navlogo} className="img-fluid" style={{ width: '100px' }} alt="Logo" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
