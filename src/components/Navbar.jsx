import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Placement Portal</div>
        <div>
          <Link to="/" className="text-white mx-2">Home</Link>
          <Link to="/company-list" className="text-white mx-2">Companies</Link>
          <Link to="/applied-list" className="text-white mx-2">Applied</Link>
        </div>
      </div>
      <Outlet/>
    </nav>
  );
};

export default Navbar;
